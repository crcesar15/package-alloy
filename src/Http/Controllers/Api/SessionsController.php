<?php

namespace ProcessMaker\Package\Alloy\Http\Controllers\Api;

use Illuminate\Http\Request;
use ProcessMaker\Http\Controllers\Controller;
use ProcessMaker\Http\Resources\ApiCollection;
use ProcessMaker\Package\Alloy\Handlers\AlloyHandler;
use ProcessMaker\Package\Alloy\Models\AlloyJourney as Journey;
use ProcessMaker\Package\Alloy\Models\AlloySession;

class SessionsController extends Controller
{
    /**
     * Fetch Sessions.
     *
     * @param Request $request Laravel Requests
     *
     * @return ApiCollection
     */
    public function fetch(Request $request)
    {
        $query = AlloySession::query();

        $filter = $request->input('filter', '');
        $filter_by = $request->input('filter_by', 'name');

        if (!empty($filter)) {
            $filter = '%' . $filter . '%';
            $query->where(
                function ($query) use ($filter, $filter_by) {
                    $query->where($filter_by, 'like', $filter);
                }
            );
        }

        $order_by = $request->has('order_by')
            ? $order_by = $request->get('order_by')
            : 'name';
        $order_direction = $request->has('order_direction')
            ? $request->get('order_direction')
            : 'ASC';

        $response = $query->orderBy(
            $request->input('order_by', $order_by),
            $request->input('order_direction', $order_direction)
        )->paginate($request->input('per_page', 10));

        return new ApiCollection($response);
    }

    /**
     * Fetch a session.
     *
     * @param string $id Journey ID
     *
     * @return AlloySession
     */
    public function show($id)
    {
        return AlloySession::findOrFail($id);
    }

    /**
     * Store a new session.
     *
     * @param Request $request Laravel Requests
     *
     * @return AlloySession
     */
    public function store(Request $request)
    {
        $alloyApplication = new AlloySession();

        $journey = Journey::findOrFail($request->input('journeyId'));

        $handler = new AlloyHandler($journey->configuration);

        // $application = $handler->getJourneyApplication($journey->configuration['token'], 'JA-FNRqNcWVWY8eADLdqzU6');
        $application = $handler->createJourneyApplication($journey->configuration['token'], $request->input('data'));

        $alloyApplication->fill([
            'request_id' => $request->input('requestId'),
            'journey_id' => $request->input('journeyId'),
            'payload' => $request->input('data'),
            'properties' => $application,
        ]);

        $alloyApplication->save();

        return $alloyApplication;
    }

    /**
     * Update a session.
     *
     * @param Request $request Laravel Requests
     * @param string  $id      Journey ID
     *
     * @return Journey
     */
    public function update(Request $request, $id)
    {
        $journey = AlloySession::findOrFail($id);
        $journey->fill($request->all());
        $journey->save();

        return $journey;
    }

    /**
     * Delete a session.
     *
     * @param string $id Journey ID
     *
     * @return void
     */
    public function destroy($id)
    {
        $journey = AlloySession::findOrFail($id);
        $journey->delete();
    }
}
