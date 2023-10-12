@extends('layouts.layout')

@section('sidebar')
    @include('layouts.sidebar', ['sidebar' => Menu::get('sidebar_admin')])
@endsection
@section('title')
    Alloy Package
@endsection
@section('breadcrumbs')
    @include('shared.breadcrumbs', [
        'routes' => [
            __('Admin') => route('admin.index'),
            'Alloy' => null,
        ],
    ])
@endsection
@section('css')
    <link rel="stylesheet" href="{{ mix('/css/package.css', 'vendor/processmaker/packages/package-alloy') }}">
@endsection
@section('content')
    <div class="container page-content" id="package-alloy" v-cloak>
        <b-tabs content-class="mt-3">
            <b-tab title="{{ __('Journeys') }}" active>
                <journeys-tab></journeys-tab>
            </b-tab>
            <b-tab title="{{ __('Sessions') }}" lazy>
                <sessions-tab></sessions-tab>
            </b-tab>
        </b-tabs>
    </div>
@section('js')
    <script src="{{ mix('/js/package.js', 'vendor/processmaker/packages/package-alloy') }}"></script>
@endsection
@endsection
