<?php

namespace ProcessMaker\Package\Alloy\Http\Controllers\Api;

use Illuminate\Http\Request;
use ProcessMaker\Http\Controllers\Controller;
use ProcessMaker\Http\Resources\ApiCollection;
use ProcessMaker\Package\Alloy\Models\AlloyJourney as Journey;

class JourneysController extends Controller
{
    /**
     * Fetch journeys.
     *
     * @param Request $request Laravel Requests
     *
     * @return ApiCollection
     */
    public function fetch(Request $request)
    {
        $query = Journey::query();

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
     * Fetch a journey.
     *
     * @param string $id Journey ID
     *
     * @return Journey
     */
    public function show($id)
    {
        return Journey::findOrFail($id);
    }

    /**
     * Store a new journey.
     *
     * @param Request $request Laravel Requests
     *
     * @return Journey
     */
    public function store(Request $request)
    {
        $journey = new Journey();
        $journey->fill($request->all());
        $journey->save();

        return $journey;
    }

    /**
     * Update a journey.
     *
     * @param Request $request Laravel Requests
     * @param string  $id      Journey ID
     *
     * @return Journey
     */
    public function update(Request $request, $id)
    {
        $journey = Journey::findOrFail($id);
        $journey->fill($request->all());
        $journey->save();

        return $journey;
    }

    /**
     * Delete a journey.
     *
     * @param string $id Journey ID
     *
     * @return void
     */
    public function destroy($id)
    {
        $journey = Journey::findOrFail($id);
        $journey->delete();
    }
}
