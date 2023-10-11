<?php

namespace ProcessMaker\Package\Alloy\Handlers;

use GuzzleHttp\Client;
use GuzzleHttp\Exception\BadResponseException;

class AlloyHandler
{
    protected $environment;

    protected $apiClient;

    public function __construct($configuration)
    {
        $environments = [
            'SandBox' => [
                'api_endpoint' => 'https://sandbox.alloy.co',
            ],
            'Production' => [
                'api_endpoint' => 'https://api.alloy.co',
            ],
        ];

        $this->environment = $environments[$configuration['environment']];

        return $this->setApiClient($configuration);
    }

    /**
     * Get Journey Application
     *
     * @param string $journeyToken Journey Token
     * @param string $journeyApplicationToken Journey Application Token
     *
     * @return array
     */
    public function getJourneyApplication($journeyToken, $journeyApplicationToken)
    {
        try {
            $response = $this->apiClient->get(
                'journeys/' . $journeyToken . '/applications/' . $journeyApplicationToken
            );
            $journeyApplication = json_decode($response->getBody()->getContents());

            return [
                'response' => $journeyApplication,
                'status' => '200',
            ];
        } catch (BadResponseException $e) {
            return ['response' => $e->getMessage(), 'status' => $e->getCode()];
        }
    }

    /**
     * Create Journey Application
     *
     * @param string $journeyToken Journey Token
     * @param array $journeyApplicationData Journey Application Data
     *
     * @return array
     */
    public function createJourneyApplication($journeyToken, $journeyApplicationData)
    {
        try {
            $response = $this->apiClient->post(
                'journeys/' . $journeyToken . '/applications',
                [
                    'json' => $journeyApplicationData,
                ]
            );
            $journeyApplication = json_decode($response->getBody()->getContents());

            return [
                'response' => $journeyApplication,
                'status' => '200',
            ];
        } catch (BadResponseException $e) {
            return ['response' => $e->getMessage(), 'status' => $e->getCode()];
        }
    }

    /**
     * Set Guzzle API Client
     *
     * @return void
     */
    private function setApiClient($configuration)
    {
        try {
            $token = base64_encode($configuration['username'] . ':' . $configuration['password']);

            $this->apiClient = new Client(
                [
                    'headers' => [
                        'Authorization' => 'Basic ' . $token,
                        'Accept' => 'application/json',
                        'Content-Type' => 'application/json',
                    ],
                    'base_uri' => $this->environment['api_endpoint'] . '/v1/',
                ]
            );
        } catch (Exception $e) {
            return ['outcome' => 'failed', 'message' => $e->getMessage()];
        }
    }
}
