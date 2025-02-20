// VIRTUAL TRUCKER RICH PRESENCE 2.77

const packageInfo = require('./package.json');

module.exports = {
    applications: {
        ets2: '627395273865297920',
        ats: '627395273865297920',
    },
    version: `Virtual Trucker Rich Presence ${packageInfo.version}`,
    kmToMilesConversion: 0.62,
    mpCheckerIntervalMilliseconds: 2 * 60 * 1000,
    mpStatsCheckerIntervalMilliseconds: 5 * 60 * 1000,
    locationCheckerIntervalMilliseconds: 1 * 60 * 1000,
    kphString: 'km/h',
    mphString: 'mph',
    kmString: 'KM',
    milesString: 'Mi',
    constants: {
        km: 'km',
        miles: 'm',
        ets2: 'ets2',
        ats: 'ats',
        brandPrefix: 'brand_',
        brandGenericKey: 'brand_generic',
        ets2LargeImagePrefix: 'ets2rpc_',
        atsLargeImagePrefix: 'ets2rpc_',
        largeImageKeys: {
            idle: 'idle',
            day: 'day',
            night: 'night',
        },
        currencies: {
            euros: '€',
            dollars: '$'
        },
        speedMultiplierValue: 3.6
    },
    supportedBrands: [
        'daf',
        'freightliner',
        'international',
        'iveco',
        'kamaz',
        'kenworth',
        'mack',
        'man',
        'mercedes',
        'peterbilt',
        'renault',
        'scania',
        'skoda',
        'volvo',
        'tesla'
    ],
    latestReleaseAPIUrl: 'https://api.github.com/repos/VirtualTruckerRPC/Virtual-Trucker-Rich-Presence/releases/latest',
    latestReleasePage: 'https://github.com/VirtualTruckerRPC/Virtual-Trucker-Rich-Presence/releases/latest'
}