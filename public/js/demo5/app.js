var dict = new Object();


dict = {
    "clear-day" : `<svg version="1.1"
                id="sun"
                class="climacon climacon_sun"
                viewBox="15 15 70 70">
            <clipPath id="sunFillClip">
            <path d="M0,0v100h100V0H0z M50.001,57.999c-4.417,0-8-3.582-8-7.999c0-4.418,3.582-7.999,8-7.999s7.998,3.581,7.998,7.999C57.999,54.417,54.418,57.999,50.001,57.999z"/>
            </clipPath>
            <g class="climacon_iconWrap climacon_iconWrap-sun">
            <g class="climacon_componentWrap climacon_componentWrap-sun">
                <g class="climacon_componentWrap climacon_componentWrap-sunSpoke">
                <path class="climacon_component climacon_component-stroke_theSun climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-east"
                        d="M72.03,51.999h-3.998c-1.105,0-2-0.896-2-1.999s0.895-2,2-2h3.998c1.104,0,2,0.896,2,2S73.136,51.999,72.03,51.999z"/>
                <path class="climacon_component climacon_component-stroke_theSun climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-northEast"
                        d="M64.175,38.688c-0.781,0.781-2.049,0.781-2.828,0c-0.781-0.781-0.781-2.047,0-2.828l2.828-2.828c0.779-0.781,2.047-0.781,2.828,0c0.779,0.781,0.779,2.047,0,2.828L64.175,38.688z"/>
                <path class="climacon_component climacon_component-stroke_theSun climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north"
                        d="M50.034,34.002c-1.105,0-2-0.896-2-2v-3.999c0-1.104,0.895-2,2-2c1.104,0,2,0.896,2,2v3.999C52.034,33.106,51.136,34.002,50.034,34.002z"/>
                <path class="climacon_component climacon_component-stroke_theSun climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-northWest"
                        d="M35.893,38.688l-2.827-2.828c-0.781-0.781-0.781-2.047,0-2.828c0.78-0.781,2.047-0.781,2.827,0l2.827,2.828c0.781,0.781,0.781,2.047,0,2.828C37.94,39.469,36.674,39.469,35.893,38.688z"/>
                <path class="climacon_component climacon_component-stroke_theSun climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-west"
                        d="M34.034,50c0,1.104-0.896,1.999-2,1.999h-4c-1.104,0-1.998-0.896-1.998-1.999s0.896-2,1.998-2h4C33.14,48,34.034,48.896,34.034,50z"/>
                <path class="climacon_component climacon_component-stroke_theSun climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-southWest"
                        d="M35.893,61.312c0.781-0.78,2.048-0.78,2.827,0c0.781,0.78,0.781,2.047,0,2.828l-2.827,2.827c-0.78,0.781-2.047,0.781-2.827,0c-0.781-0.78-0.781-2.047,0-2.827L35.893,61.312z"/>
                <path class="climacon_component climacon_component-stroke_theSun climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-south"
                        d="M50.034,65.998c1.104,0,2,0.895,2,1.999v4c0,1.104-0.896,2-2,2c-1.105,0-2-0.896-2-2v-4C48.034,66.893,48.929,65.998,50.034,65.998z"/>
                <path class="climacon_component climacon_component-stroke_theSun climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-southEast"
                        d="M64.175,61.312l2.828,2.828c0.779,0.78,0.779,2.047,0,2.827c-0.781,0.781-2.049,0.781-2.828,0l-2.828-2.827c-0.781-0.781-0.781-2.048,0-2.828C62.126,60.531,63.392,60.531,64.175,61.312z"/>
                </g>
                <g class="climacon_componentWrap climacon_componentWrap_sunBody" clip-path="url(#sunFillClip)">
                <circle class="climacon_component climacon_component-stroke_theSun climacon_component-stroke_sunBody"
                        cx="50.034"
                        cy="50"
                        r="11.999"/>
                </g>
            </g>
            </g>
            </svg><!-- sun -->`,
    "clear-night" : ` <svg version="1.1"
                id="moon"
                class="climacon climacon_moon"
                viewBox="15 15 70 70">
                <clipPath id="moonFillClip">
                <path d="M15,15v70h70V15H15z M50,57.999c-4.418,0-7.999-3.582-7.999-7.999c0-3.803,2.655-6.979,6.211-7.792c0.903,4.854,4.726,8.676,9.579,9.58C56.979,55.344,53.802,57.999,50,57.999z"/>
                </clipPath>
                <g class="climacon_iconWrap climacon_iconWrap-moon">
                <g class="climacon_componentWrap climacon_componentWrap-moon" clip-path="url(#moonFillClip)">
                    <path class="climacon_component climacon_component-stroke_theMoon climacon_component-stroke_moon"
                        d="M50,61.998c-6.627,0-11.999-5.372-11.999-11.998c0-6.627,5.372-11.999,11.999-11.999c0.755,0,1.491,0.078,2.207,0.212c-0.132,0.576-0.208,1.173-0.208,1.788c0,4.418,3.582,7.999,8,7.999c0.614,0,1.212-0.076,1.788-0.208c0.133,0.717,0.211,1.452,0.211,2.208C61.998,56.626,56.626,61.998,50,61.998z"/>
                </g>
                </g>
                </svg><!-- moon -->`,
    "snowflake" : `<svg version="1.1" id="cloudSnowAltFill" class="climacon climacon_cloudSnowAltFill" viewBox="15 15 70 70">
                    <g class="climacon_iconWrap climacon_iconWrap-cloudSnowAltFill">
                    <g class="climacon_wrapperComponent climacon_wrapperComponent-snowAlt">
                        <g class="climacon_component climacon_component climacon_component-snowAlt">
                        <path class="climacon_component climacon_component-stroke_theSnowFlake climacon_component-stroke_snowAlt" d="M43.072,59.641c0.553-0.957,1.775-1.283,2.732-0.731L48,60.176v-2.535c0-1.104,0.896-2,2-2c1.104,0,2,0.896,2,2v2.535l2.195-1.268c0.957-0.551,2.18-0.225,2.73,0.732c0.553,0.957,0.225,2.18-0.73,2.731l-2.196,1.269l2.196,1.268c0.955,0.553,1.283,1.775,0.73,2.732c-0.552,0.954-1.773,1.282-2.73,0.729L52,67.104v2.535c0,1.105-0.896,2-2,2c-1.104,0-2-0.895-2-2v-2.535l-2.195,1.269c-0.957,0.553-2.18,0.226-2.732-0.729c-0.552-0.957-0.225-2.181,0.732-2.732L46,63.641l-2.195-1.268C42.848,61.82,42.521,60.598,43.072,59.641z"></path>
                        <circle class="climacon_component climacon_component-stroke_theSnowFlake climacon_component-fill_snowAlt" fill="#FFFFFF" cx="50" cy="63.641" r="2"></circle>
                        </g>
                    </g>
                    <g class="climacon_componentWrap climacon_componentWrap_cloud">
                        <path class="climacon_component climacon_component-stroke_theCloud climacon_component-stroke_cloud" d="M43.945,65.639c-8.835,0-15.998-7.162-15.998-15.998c0-8.836,7.163-15.998,15.998-15.998c6.004,0,11.229,3.312,13.965,8.203c0.664-0.113,1.338-0.205,2.033-0.205c6.627,0,11.998,5.373,11.998,12c0,6.625-5.371,11.998-11.998,11.998C57.168,65.639,47.143,65.639,43.945,65.639z"></path>
                        <path class="climacon_component climacon_component-fill climacon_component-fill_cloud" fill="#FFFFFF" d="M59.943,61.639c4.418,0,8-3.582,8-7.998c0-4.417-3.582-8-8-8c-1.601,0-3.082,0.481-4.334,1.291c-1.23-5.316-5.973-9.29-11.665-9.29c-6.626,0-11.998,5.372-11.998,11.999c0,6.626,5.372,11.998,11.998,11.998C47.562,61.639,56.924,61.639,59.943,61.639z"></path>
                    </g>
                    </g>
                </svg>`,
    "cloudy-rain" : `<svg version="1.1" id="cloudDrizzleAlt" class="climacon climacon_cloudDrizzleFillAlt" viewBox="15 15 70 70">
                <g class="climacon_iconWrap climacon_iconWrap-cloudDrizzleFillAlt">
                <g class="climacon_wrapperComponent climacon_wrapperComponent-drizzle">
                    <path class="climacon_component climacon_component-stroke_theDrizzle climacon_component-stroke_drizzle climacon_component-stroke_drizzle-left" id="Drizzle-Left_1_" d="M56.969,57.672l-2.121,2.121c-1.172,1.172-1.172,3.072,0,4.242c1.17,1.172,3.07,1.172,4.24,0c1.172-1.17,1.172-3.07,0-4.242L56.969,57.672z"></path>
                    <path class="climacon_component climacon_component-stroke_theDrizzle climacon_component-stroke_drizzle climacon_component-stroke_drizzle-middle" d="M50.088,57.672l-2.119,2.121c-1.174,1.172-1.174,3.07,0,4.242c1.17,1.172,3.068,1.172,4.24,0s1.172-3.07,0-4.242L50.088,57.672z"></path>
                    <path class="climacon_component climacon_component-stroke_theDrizzle climacon_component-stroke_drizzle climacon_component-stroke_drizzle-right" d="M43.033,57.672l-2.121,2.121c-1.172,1.172-1.172,3.07,0,4.242s3.07,1.172,4.244,0c1.172-1.172,1.172-3.07,0-4.242L43.033,57.672z"></path>
                </g>
                <g class="climacon_componentWrap climacon_componentWrap_cloud">
                    <path class="climacon_component climacon_component-stroke_theCloud climacon_component-stroke_cloud" d="M43.945,65.639c-8.835,0-15.998-7.162-15.998-15.998c0-8.836,7.163-15.998,15.998-15.998c6.004,0,11.229,3.312,13.965,8.203c0.664-0.113,1.338-0.205,2.033-0.205c6.627,0,11.998,5.373,11.998,12c0,6.625-5.371,11.998-11.998,11.998C57.168,65.639,47.143,65.639,43.945,65.639z"></path>
                    <path class="climacon_component climacon_component-fill climacon_component-fill_cloud" fill="#FFFFFF" d="M59.943,61.639c4.418,0,8-3.582,8-7.998c0-4.417-3.582-8-8-8c-1.601,0-3.082,0.481-4.334,1.291c-1.23-5.316-5.973-9.29-11.665-9.29c-6.626,0-11.998,5.372-11.998,11.999c0,6.626,5.372,11.998,11.998,11.998C47.562,61.639,56.924,61.639,59.943,61.639z"></path>
                </g>
                </g>
            </svg>`,
    "sleet" : `<svg version="1.1" id="cloudHailAltFill" class="climacon climacon_cloudHailAltFill" viewBox="15 15 70 70">
                <g class="climacon_iconWrap climacon_iconWrap-cloudHailAltFill">
                <g class="climacon_wrapperComponent climacon_wrapperComponent-hailAlt">
                    <g class="climacon_component climacon_component-stroke_theDrizzle climacon_component-stroke_hailAlt climacon_component-stroke_hailAlt-left">
                    <circle cx="42" cy="65.498" r="2"></circle>
                    </g>
                    <g class="climacon_component climacon_component-stroke_theDrizzle climacon_component-stroke_hailAlt climacon_component-stroke_hailAlt-middle">
                    <circle cx="49.999" cy="65.498" r="2"></circle>
                    </g>
                    <g class="climacon_component climacon_component-stroke_theDrizzle climacon_component-stroke_hailAlt climacon_component-stroke_hailAlt-right">
                    <circle cx="57.998" cy="65.498" r="2"></circle>
                    </g>
                    <g class="climacon_component climacon_component-stroke_theDrizzle climacon_component-stroke_hailAlt climacon_component-stroke_hailAlt-left">
                    <circle cx="42" cy="65.498" r="2"></circle>
                    </g>
                    <g class="climacon_component climacon_component-stroke_theDrizzle climacon_component-stroke_hailAlt climacon_component-stroke_hailAlt-middle">
                    <circle cx="49.999" cy="65.498" r="2"></circle>
                    </g>
                    <g class="climacon_component climacon_component-stroke_theDrizzle climacon_component-stroke_hailAlt climacon_component-stroke_hailAlt-right">
                    <circle cx="57.998" cy="65.498" r="2"></circle>
                    </g>
                </g>
                <g class="climacon_componentWrap climacon_componentWrap_cloud">
                    <path class="climacon_component climacon_component-stroke_theCloud climacon_component-stroke_cloud" d="M43.945,65.639c-8.835,0-15.998-7.162-15.998-15.998c0-8.836,7.163-15.998,15.998-15.998c6.004,0,11.229,3.312,13.965,8.203c0.664-0.113,1.338-0.205,2.033-0.205c6.627,0,11.998,5.373,11.998,12c0,6.625-5.371,11.998-11.998,11.998C57.168,65.639,47.143,65.639,43.945,65.639z"></path>
                    <path class="climacon_component climacon_component-fill climacon_component-fill_cloud" fill="#FFFFFF" d="M59.943,61.639c4.418,0,8-3.582,8-7.998c0-4.417-3.582-8-8-8c-1.601,0-3.082,0.481-4.334,1.291c-1.23-5.316-5.973-9.29-11.665-9.29c-6.626,0-11.998,5.372-11.998,11.999c0,6.626,5.372,11.998,11.998,11.998C47.562,61.639,56.924,61.639,59.943,61.639z"></path>
                </g>
                </g>
            </svg>`,
    "wind": `<svg version="1.1" id="wind" class="climacon climacon_wind" viewBox="15 15 70 70">
                <g class="climacon_iconWrap climacon_iconWrap-wind">
                <g class="climacon_wrapperComponent climacon_componentWrap-wind">
                    <path class="climacon_component climacon_component-stroke_theCloud climacon_component-wind climacon_component-wind_curl" d="M65.999,52L65.999,52h-3c-1.104,0-2-0.895-2-1.999c0-1.104,0.896-2,2-2h3c1.104,0,2-0.896,2-1.999c0-1.105-0.896-2-2-2s-2-0.896-2-2s0.896-2,2-2c0.138,0,0.271,0.014,0.401,0.041c3.121,0.211,5.597,2.783,5.597,5.959C71.997,49.314,69.312,52,65.999,52z"></path>
                    <path class="climacon_component climacon_component-stroke_theCloud climacon_component-wind" d="M55.999,48.001h-2h-6.998H34.002c-1.104,0-1.999,0.896-1.999,2c0,1.104,0.895,1.999,1.999,1.999h2h3.999h3h4h3h3.998h2c3.313,0,6,2.688,6,6c0,3.176-2.476,5.748-5.597,5.959C56.271,63.986,56.139,64,55.999,64c-1.104,0-2-0.896-2-2c0-1.105,0.896-2,2-2s2-0.896,2-2s-0.896-2-2-2h-2h-3.998h-3h-4h-3h-3.999h-2c-3.313,0-5.999-2.686-5.999-5.999c0-3.175,2.475-5.747,5.596-5.959c0.131-0.026,0.266-0.04,0.403-0.04l0,0h12.999h6.998h2c1.104,0,2-0.896,2-2s-0.896-2-2-2s-2-0.895-2-2c0-1.104,0.896-2,2-2c0.14,0,0.272,0.015,0.403,0.041c3.121,0.211,5.597,2.783,5.597,5.959C61.999,45.314,59.312,48.001,55.999,48.001z"></path>
                </g>
                </g>
            </svg>`,
    "fog": `<svg version="1.1" id="cloudFogFill" class="climacon climacon_cloudFogFill" viewBox="15 15 70 70">
                <g class="climacon_iconWrap climacon_iconWrap-cloudFog">
                <g class="climacon_wrapperComponent climacon_wrapperComponent-Fog">
                    <path class="climacon_component climacon_component-stroke_theCloud climacon_component-stroke_fogLine climacon_component-stroke_fogLine-top" d="M69.998,57.641H30.003c-1.104,0-2-0.895-2-2c0-1.104,0.896-2,2-2h39.995c1.104,0,2,0.896,2,2C71.998,56.746,71.104,57.641,69.998,57.641z"></path>
                    <path class="climacon_component climacon_component-stroke_theCloud climacon_component-stroke_fogLine climacon_component-stroke_fogLine-middle" d="M69.998,65.641H30.003c-1.104,0-2-0.896-2-2s0.896-2,2-2h39.995c1.104,0,2,0.896,2,2C71.998,64.744,71.104,65.641,69.998,65.641z"></path>
                    <path class="climacon_component climacon_component-stroke_theCloud climacon_component-stroke_fogLine climacon_component-stroke_fogLine-bottom" d="M30.003,69.639h39.995c1.104,0,2,0.896,2,2c0,1.105-0.896,2-2,2H30.003c-1.104,0-2-0.895-2-2C28.003,70.535,28.898,69.639,30.003,69.639z"></path>
                </g>
                <g class="climacon_wrapperComponent climacon_wrapperComponent-cloud">
                    <path class="climacon_component climacon_component-stroke_theCloud climacon_component-stroke_cloud" d="M59.999,45.643c-1.601,0-3.083,0.48-4.333,1.291c-1.232-5.317-5.974-9.291-11.665-9.291c-6.626,0-11.998,5.373-11.998,12h-4c0-8.835,7.163-15.999,15.998-15.999c6.004,0,11.229,3.312,13.965,8.204c0.664-0.113,1.337-0.205,2.033-0.205c5.222,0,9.651,3.342,11.301,8h-4.381C65.535,47.253,62.958,45.643,59.999,45.643z"></path>
                    <path class="climacon_component climacon_component-stroke_theCloud climacon_component-stroke_cloud" d="M71.287,49.355c-1.659-4.632-6.08-7.954-11.289-7.954c-0.695,0-1.369,0.091-2.033,0.205C55.229,36.72,50.004,33.413,44,33.413c-8.824,0-15.977,7.134-15.996,15.942H71.287z"></path>
                    <path fill="#FFFFFF" class="climacon_component climacon_component-fill climacon_component-fill_cloud" d="M66.897,49.376c-1.389-2.369-3.955-3.965-6.899-3.965c-1.602,0-3.082,0.48-4.334,1.291c-1.23-5.316-5.973-9.291-11.664-9.291c-6.615,0-11.977,5.354-11.996,11.965H66.897z"></path>
                </g>
                </g>
            </svg>`,
    "cloudy" : `<svg version="1.1" id="cloudFill" class="climacon climacon_cloudFill" viewBox="15 15 70 70">
                    <g class="climacon_iconWrap climacon_iconWrap-cloud">
                    <g class="climacon_componentWrap climacon_componentWrap_cloud">
                        <path class="climacon_component climacon_component-stroke_theCloud climacon_component-stroke_cloud" d="M43.945,65.639c-8.835,0-15.998-7.162-15.998-15.998c0-8.836,7.163-15.998,15.998-15.998c6.004,0,11.229,3.312,13.965,8.203c0.664-0.113,1.338-0.205,2.033-0.205c6.627,0,11.998,5.373,11.998,12c0,6.625-5.371,11.998-11.998,11.998C57.168,65.639,47.143,65.639,43.945,65.639z"></path>
                        <path class="climacon_component climacon_component-fill climacon_component-fill_cloud" fill="#FFFFFF" d="M59.943,61.639c4.418,0,8-3.582,8-7.998c0-4.417-3.582-8-8-8c-1.601,0-3.082,0.481-4.334,1.291c-1.23-5.316-5.973-9.29-11.665-9.29c-6.626,0-11.998,5.372-11.998,11.999c0,6.626,5.372,11.998,11.998,11.998C47.562,61.639,56.924,61.639,59.943,61.639z"></path>
                    </g>
                    </g>
                </svg>`,
    "partly-cloudy-day" : `<svg version="1.1" id="cloudSunFill" class="climacon climacon_cloudSunFill" viewBox="15 15 70 70">
                            <g class="climacon_iconWrap climacon_cloudSunFill-iconWrap">
                            <g class="climacon_componentWrap climacon_componentWrap-sun climacon_componentWrap-sun_cloud">
                                <g class="climacon_componentWrap climacon_componentWrap_sunSpoke">
                                <path class="climacon_component climacon_component-stroke_theSun climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north" d="M80.029,43.611h-3.998c-1.105,0-2-0.896-2-1.999s0.895-2,2-2h3.998c1.104,0,2,0.896,2,2S81.135,43.611,80.029,43.611z"></path>
                                <path class="climacon_component climacon_component-stroke_theSun climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north" d="M72.174,30.3c-0.781,0.781-2.049,0.781-2.828,0c-0.781-0.781-0.781-2.047,0-2.828l2.828-2.828c0.779-0.781,2.047-0.781,2.828,0c0.779,0.781,0.779,2.047,0,2.828L72.174,30.3z"></path>
                                <path class="climacon_component climacon_component-stroke_theSun climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north" d="M58.033,25.614c-1.105,0-2-0.896-2-2v-3.999c0-1.104,0.895-2,2-2c1.104,0,2,0.896,2,2v3.999C60.033,24.718,59.135,25.614,58.033,25.614z"></path>
                                <path class="climacon_component climacon_component-stroke_theSun climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north" d="M43.892,30.3l-2.827-2.828c-0.781-0.781-0.781-2.047,0-2.828c0.78-0.781,2.047-0.781,2.827,0l2.827,2.828c0.781,0.781,0.781,2.047,0,2.828C45.939,31.081,44.673,31.081,43.892,30.3z"></path>
                                <path class="climacon_component climacon_component-stroke_theSun climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north" d="M42.033,41.612c0,1.104-0.896,1.999-2,1.999h-4c-1.104,0-1.998-0.896-1.998-1.999s0.896-2,1.998-2h4C41.139,39.612,42.033,40.509,42.033,41.612z"></path>
                                <path class="climacon_component climacon_component-stroke_theSun climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north" d="M43.892,52.925c0.781-0.78,2.048-0.78,2.827,0c0.781,0.78,0.781,2.047,0,2.828l-2.827,2.827c-0.78,0.781-2.047,0.781-2.827,0c-0.781-0.78-0.781-2.047,0-2.827L43.892,52.925z"></path>
                                <path class="climacon_component climacon_component-stroke_theSun climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north" d="M58.033,57.61c1.104,0,2,0.895,2,1.999v4c0,1.104-0.896,2-2,2c-1.105,0-2-0.896-2-2v-4C56.033,58.505,56.928,57.61,58.033,57.61z"></path>
                                <path class="climacon_component climacon_component-stroke_theSun climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north" d="M72.174,52.925l2.828,2.828c0.779,0.78,0.779,2.047,0,2.827c-0.781,0.781-2.049,0.781-2.828,0l-2.828-2.827c-0.781-0.781-0.781-2.048,0-2.828C70.125,52.144,71.391,52.144,72.174,52.925z"></path>
                                </g>
                                <g class="climacon_wrapperComponent climacon_wrapperComponent-sunBody">
                                <circle class="climacon_component climacon_component-stroke_theSun climacon_component-stroke_sunBody" cx="58.033" cy="41.612" r="11.999"></circle>
                                <circle class="climacon_component climacon_component-fill_theSun climacon_component-fill_sunBody" fill="#FFFFFF" cx="58.033" cy="41.612" r="7.999"></circle>
                                </g>
                            </g>
                            <g class="climacon_wrapperComponent climacon_wrapperComponent-cloud">
                                <path class="climacon_component climacon_component-stroke_theCloud climacon_component-stroke_cloud" d="M44.033,65.641c-8.836,0-15.999-7.162-15.999-15.998c0-8.835,7.163-15.998,15.999-15.998c6.006,0,11.233,3.312,13.969,8.203c0.664-0.113,1.338-0.205,2.033-0.205c6.627,0,11.998,5.373,11.998,12c0,6.625-5.371,11.998-11.998,11.998C57.26,65.641,47.23,65.641,44.033,65.641z"></path>
                                <path class="climacon_component climacon_component-fill climacon_component-fill_cloud" fill="#FFFFFF" d="M60.035,61.641c4.418,0,8-3.582,8-7.998c0-4.418-3.582-8-8-8c-1.6,0-3.082,0.481-4.334,1.291c-1.23-5.316-5.976-9.29-11.668-9.29c-6.627,0-11.999,5.372-11.999,11.999c0,6.627,5.372,11.998,11.999,11.998C47.65,61.641,57.016,61.641,60.035,61.641z"></path>
                            </g>
                            </g>
                        </svg>`,
    "partly-cloudy-night" : `<svg version="1.1" id="cloudMoonFill" class="climacon climacon_cloudMoonFill" viewBox="15 15 70 70">
                                <g class="climacon_iconWrap climacon_iconWrap-cloudMoonFill">
                                <g class="climacon_wrapperComponent climacon_wrapperComponent-moon climacon_componentWrap-moon_cloud">
                                    <path class="climacon_component climacon_component-stroke_theMoon climacon_component-stroke_moon" d="M61.023,50.641c-6.627,0-11.999-5.372-11.999-11.998c0-6.627,5.372-11.999,11.999-11.999c0.755,0,1.491,0.078,2.207,0.212c-0.132,0.576-0.208,1.173-0.208,1.788c0,4.418,3.582,7.999,8,7.999c0.614,0,1.212-0.076,1.788-0.208c0.133,0.717,0.211,1.452,0.211,2.208C73.021,45.269,67.649,50.641,61.023,50.641z"></path>
                                    <path class="climacon_component climacon_component-fill_theMoon climacon_component-fill_moon" fill="#FFFFFF" d="M59.235,30.851c-3.556,0.813-6.211,3.989-6.211,7.792c0,4.417,3.581,7.999,7.999,7.999c3.802,0,6.979-2.655,7.791-6.211C63.961,39.527,60.139,35.705,59.235,30.851z"></path>
                                </g>
                                <g class="climacon_wrapperComponent climacon_wrapperComponent-cloud">
                                    <path class="climacon_component climacon_component-stroke_theCloud climacon_component-stroke_cloud" d="M44.033,65.641c-8.836,0-15.999-7.162-15.999-15.998c0-8.835,7.163-15.998,15.999-15.998c6.006,0,11.233,3.312,13.969,8.203c0.664-0.113,1.338-0.205,2.033-0.205c6.627,0,11.998,5.373,11.998,12c0,6.625-5.371,11.998-11.998,11.998C57.26,65.641,47.23,65.641,44.033,65.641z"></path>
                                    <path class="climacon_component climacon_component-fill climacon_component-fill_cloud" fill="#FFFFFF" d="M60.035,61.641c4.418,0,8-3.582,8-7.998c0-4.418-3.582-8-8-8c-1.6,0-3.082,0.481-4.334,1.291c-1.23-5.316-5.976-9.29-11.668-9.29c-6.627,0-11.999,5.372-11.999,11.999c0,6.627,5.372,11.998,11.999,11.998C47.65,61.641,57.016,61.641,60.035,61.641z"></path>
                                </g>
                                </g>
                            </svg>`,
    "thunderstorm" : `<svg version="1.1" id="cloudLightningFill" class="climacon climacon_cloudLightningFill" viewBox="15 15 70 70">
                        <g class="climacon_iconWrap climacon_iconWrap-cloudLightningFill">
                        <g class="climacon_wrapperComponent climacon_wrapperComponent-lightning">
                            <polygon class="climacon_component climacon_component-stroke_theSun climacon_component-stroke_lightning" points="48.001,51.641 57.999,51.641 52,61.641 58.999,61.641 46.001,77.639 49.601,65.641 43.001,65.641 "></polygon>
                        </g>
                        <g class="climacon_componentWrap climacon_componentWrap_cloud">
                            <path class="climacon_component climacon_component-stroke_theCloud climacon_component-stroke_cloud" d="M43.945,65.639c-8.835,0-15.998-7.162-15.998-15.998c0-8.836,7.163-15.998,15.998-15.998c6.004,0,11.229,3.312,13.965,8.203c0.664-0.113,1.338-0.205,2.033-0.205c6.627,0,11.998,5.373,11.998,12c0,6.625-5.371,11.998-11.998,11.998C57.168,65.639,47.143,65.639,43.945,65.639z"></path>
                            <path class="climacon_component climacon_component-fill climacon_component-fill_cloud" fill="#FFFFFF" d="M59.943,61.639c4.418,0,8-3.582,8-7.998c0-4.417-3.582-8-8-8c-1.601,0-3.082,0.481-4.334,1.291c-1.23-5.316-5.973-9.29-11.665-9.29c-6.626,0-11.998,5.372-11.998,11.999c0,6.626,5.372,11.998,11.998,11.998C47.562,61.639,56.924,61.639,59.943,61.639z"></path>
                        </g>
                        </g>
                    </svg>`,
    "tornado" : `<svg version="1.1" id="tornado" class="climacon climacon_tornado" viewBox="15 15 70 70">
                    <g class="climacon_iconWrap climacon_iconWrap-tornado">
                    <g class="climacon_componentWrap climacon_componentWrap-tornado">
                        <path class="climacon_component climacon_component-stroke_theMoon climacon_component-stroke_tornadoLine" d="M68.997,36.459H31.002c-1.104,0-2-0.896-2-1.999c0-1.104,0.896-2,2-2h37.995c1.104,0,2,0.896,2,2C70.997,35.563,70.102,36.459,68.997,36.459z"></path>
                        <path class="climacon_component climacon_component-fill_theMoon climacon_component-stroke_tornadoLine" d="M35.002,40.459h29.996c1.104,0,2,0.896,2,2s-0.896,1.999-2,1.999H35.002c-1.104,0-2-0.896-2-1.999C33.002,41.354,33.898,40.459,35.002,40.459z"></path>
                        <path class="climacon_component climacon_component-stroke_theMoon climacon_component-stroke_tornadoLine" d="M39.001,48.458h21.998c1.104,0,1.999,0.896,1.999,1.999c0,1.104-0.896,2-1.999,2H39.001c-1.104,0-1.999-0.896-1.999-2C37.002,49.354,37.897,48.458,39.001,48.458z"></path>
                        <path class="climacon_component climacon_component-fill_theMoon climacon_component-stroke_tornadoLine" d="M47,64.456h5.999c1.104,0,2,0.896,2,1.999s-0.896,2-2,2H47c-1.104,0-2-0.896-2-2S45.896,64.456,47,64.456z"></path>
                        <path class="climacon_component climacon_component-stroke_theMoon climacon_component-stroke_tornadoLine" d="M40.869,58.456c0-1.104,0.896-1.999,2-1.999h13.998c1.104,0,2,0.896,2,1.999c0,1.104-0.896,2-2,2H42.869C41.765,60.456,40.869,59.561,40.869,58.456z"></path>
                    </g>
                    </g>
                </svg>`,  
    "partly-cloudy-day-rain" : `<svg version="1.1" id="cloudDrizzleSunFillAlt" class="climacon climacon_cloudDrizzleSunFillAlt" viewBox="15 15 70 70">
                        <g class="climacon_iconWrap climacon_iconWrap-cloudDrizzleSunFillAlt">
                        <g class="climacon_componentWrap climacon_componentWrap-sun climacon_componentWrap-sun_cloud">
                            <g class="climacon_componentWrap climacon_componentWrap_sunSpoke">
                            <path class="climacon_component climacon_component-stroke_theSun climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north" d="M80.029,43.611h-3.998c-1.105,0-2-0.896-2-1.999s0.895-2,2-2h3.998c1.104,0,2,0.896,2,2S81.135,43.611,80.029,43.611z"></path>
                            <path class="climacon_component climacon_component-stroke_theSun climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north" d="M72.174,30.3c-0.781,0.781-2.049,0.781-2.828,0c-0.781-0.781-0.781-2.047,0-2.828l2.828-2.828c0.779-0.781,2.047-0.781,2.828,0c0.779,0.781,0.779,2.047,0,2.828L72.174,30.3z"></path>
                            <path class="climacon_component climacon_component-stroke_theSun climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north" d="M58.033,25.614c-1.105,0-2-0.896-2-2v-3.999c0-1.104,0.895-2,2-2c1.104,0,2,0.896,2,2v3.999C60.033,24.718,59.135,25.614,58.033,25.614z"></path>
                            <path class="climacon_component climacon_component-stroke_theSun climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north" d="M43.892,30.3l-2.827-2.828c-0.781-0.781-0.781-2.047,0-2.828c0.78-0.781,2.047-0.781,2.827,0l2.827,2.828c0.781,0.781,0.781,2.047,0,2.828C45.939,31.081,44.673,31.081,43.892,30.3z"></path>
                            <path class="climacon_component climacon_component-stroke_theSun climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north" d="M42.033,41.612c0,1.104-0.896,1.999-2,1.999h-4c-1.104,0-1.998-0.896-1.998-1.999s0.896-2,1.998-2h4C41.139,39.612,42.033,40.509,42.033,41.612z"></path>
                            <path class="climacon_component climacon_component-stroke_theSun climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north" d="M43.892,52.925c0.781-0.78,2.048-0.78,2.827,0c0.781,0.78,0.781,2.047,0,2.828l-2.827,2.827c-0.78,0.781-2.047,0.781-2.827,0c-0.781-0.78-0.781-2.047,0-2.827L43.892,52.925z"></path>
                            <path class="climacon_component climacon_component-stroke_theSun climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north" d="M58.033,57.61c1.104,0,2,0.895,2,1.999v4c0,1.104-0.896,2-2,2c-1.105,0-2-0.896-2-2v-4C56.033,58.505,56.928,57.61,58.033,57.61z"></path>
                            <path class="climacon_component climacon_component-stroke_theSun climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north" d="M72.174,52.925l2.828,2.828c0.779,0.78,0.779,2.047,0,2.827c-0.781,0.781-2.049,0.781-2.828,0l-2.828-2.827c-0.781-0.781-0.781-2.048,0-2.828C70.125,52.144,71.391,52.144,72.174,52.925z"></path>
                            </g>
                            <g class="climacon_wrapperComponent climacon_wrapperComponent-sunBody">
                            <circle class="climacon_component climacon_component-stroke_theSun climacon_component-stroke_sunBody" cx="58.033" cy="41.612" r="11.999"></circle>
                            <circle class="climacon_component climacon_component-fill_theSun climacon_component-fill_sunBody" fill="#FFFFFF" cx="58.033" cy="41.612" r="7.999"></circle>
                            </g>
                        </g>
                        <g class="climacon_wrapperComponent climacon_wrapperComponent-drizzle">
                            <path class="climacon_component climacon_component-stroke_theDrizzle climacon_component-stroke_drizzle climacon_component-stroke_drizzle-left" id="Drizzle-Left_1_" d="M56.969,57.672l-2.121,2.121c-1.172,1.172-1.172,3.072,0,4.242c1.17,1.172,3.07,1.172,4.24,0c1.172-1.17,1.172-3.07,0-4.242L56.969,57.672z"></path>
                            <path class="climacon_component climacon_component-stroke_theDrizzle climacon_component-stroke_drizzle climacon_component-stroke_drizzle-middle" d="M50.088,57.672l-2.119,2.121c-1.174,1.172-1.174,3.07,0,4.242c1.17,1.172,3.068,1.172,4.24,0s1.172-3.07,0-4.242L50.088,57.672z"></path>
                            <path class="climacon_component climacon_component-stroke_theDrizzle climacon_component-stroke_drizzle climacon_component-stroke_drizzle-right" d="M43.033,57.672l-2.121,2.121c-1.172,1.172-1.172,3.07,0,4.242s3.07,1.172,4.244,0c1.172-1.172,1.172-3.07,0-4.242L43.033,57.672z"></path>
                        </g>
                        <g class="climacon_componentWrap climacon_componentWrap_cloud">
                            <path class="climacon_component climacon_component-stroke_theCloud climacon_component-stroke_cloud" d="M43.945,65.639c-8.835,0-15.998-7.162-15.998-15.998c0-8.836,7.163-15.998,15.998-15.998c6.004,0,11.229,3.312,13.965,8.203c0.664-0.113,1.338-0.205,2.033-0.205c6.627,0,11.998,5.373,11.998,12c0,6.625-5.371,11.998-11.998,11.998C57.168,65.639,47.143,65.639,43.945,65.639z"></path>
                            <path class="climacon_component climacon_component-fill climacon_component-fill_cloud" fill="#FFFFFF" d="M59.943,61.639c4.418,0,8-3.582,8-7.998c0-4.417-3.582-8-8-8c-1.601,0-3.082,0.481-4.334,1.291c-1.23-5.316-5.973-9.29-11.665-9.29c-6.626,0-11.998,5.372-11.998,11.999c0,6.626,5.372,11.998,11.998,11.998C47.562,61.639,56.924,61.639,59.943,61.639z"></path>
                        </g>
                        </g>
                    </svg>`,
    "partly-cloudy-night-rain" :`<svg version="1.1" id="cloudDrizzleMoonFillAlt" class="climacon climacon_cloudDrizzleMoonFillAlt" viewBox="15 15 70 70">
                                <g class="climacon_iconWrap climacon_iconWrap-cloudDrizzleMoonFillAlt">
                                <g class="climacon_wrapperComponent climacon_wrapperComponent-moon climacon_componentWrap-moon_cloud">
                                    <path class="climacon_component climacon_component-stroke_theMoon climacon_component-stroke_sunBody" d="M61.023,50.641c-6.627,0-11.999-5.372-11.999-11.998c0-6.627,5.372-11.999,11.999-11.999c0.755,0,1.491,0.078,2.207,0.212c-0.132,0.576-0.208,1.173-0.208,1.788c0,4.418,3.582,7.999,8,7.999c0.614,0,1.212-0.076,1.788-0.208c0.133,0.717,0.211,1.452,0.211,2.208C73.021,45.269,67.649,50.641,61.023,50.641z"></path>
                                    <path class="climacon_component climacon_component-fill_theMoon climacon_component-fill_moon" fill="#FFFFFF" d="M59.235,30.851c-3.556,0.813-6.211,3.989-6.211,7.792c0,4.417,3.581,7.999,7.999,7.999c3.802,0,6.979-2.655,7.791-6.211C63.961,39.527,60.139,35.705,59.235,30.851z"></path>
                                </g>
                                <g class="climacon_wrapperComponent climacon_wrapperComponent-drizzle">
                                    <path class="climacon_component climacon_component-stroke_theDrizzle climacon_component-stroke_drizzle climacon_component-stroke_drizzle-left" id="Drizzle-Left_1_" d="M56.969,57.672l-2.121,2.121c-1.172,1.172-1.172,3.072,0,4.242c1.17,1.172,3.07,1.172,4.24,0c1.172-1.17,1.172-3.07,0-4.242L56.969,57.672z"></path>
                                    <path class="climacon_component climacon_component-stroke_theDrizzle climacon_component-stroke_drizzle climacon_component-stroke_drizzle-middle" d="M50.088,57.672l-2.119,2.121c-1.174,1.172-1.174,3.07,0,4.242c1.17,1.172,3.068,1.172,4.24,0s1.172-3.07,0-4.242L50.088,57.672z"></path>
                                    <path class="climacon_component climacon_component-stroke_theDrizzle climacon_component-stroke_drizzle climacon_component-stroke_drizzle-right" d="M43.033,57.672l-2.121,2.121c-1.172,1.172-1.172,3.07,0,4.242s3.07,1.172,4.244,0c1.172-1.172,1.172-3.07,0-4.242L43.033,57.672z"></path>
                                </g>
                                <g class="climacon_componentWrap climacon_componentWrap_cloud">
                                    <path class="climacon_component climacon_component-stroke_theCloud climacon_component-stroke_cloud" d="M43.945,65.639c-8.835,0-15.998-7.162-15.998-15.998c0-8.836,7.163-15.998,15.998-15.998c6.004,0,11.229,3.312,13.965,8.203c0.664-0.113,1.338-0.205,2.033-0.205c6.627,0,11.998,5.373,11.998,12c0,6.625-5.371,11.998-11.998,11.998C57.168,65.639,47.143,65.639,43.945,65.639z"></path>
                                    <path class="climacon_component climacon_component-fill climacon_component-fill_cloud" fill="#FFFFFF" d="M59.943,61.639c4.418,0,8-3.582,8-7.998c0-4.417-3.582-8-8-8c-1.601,0-3.082,0.481-4.334,1.291c-1.23-5.316-5.973-9.29-11.665-9.29c-6.626,0-11.998,5.372-11.998,11.999c0,6.626,5.372,11.998,11.998,11.998C47.562,61.639,56.924,61.639,59.943,61.639z"></path>
                                </g>
                                </g>
                            </svg>`,
    "cloudy-sun-snow-day" : `<svg version="1.1" id="cloudSnowSunAltFill" class="climacon climacon_cloudSnowSunAltFill" viewBox="15 15 70 70">
                                <g class="climacon_iconWrap climacon_iconWrap-cloudSnowSunAltFill">
                                <g class="climacon_componentWrap climacon_componentWrap-sun climacon_componentWrap-sun_cloud">
                                    <g class="climacon_componentWrap climacon_componentWrap_sunSpoke">
                                    <path class="climacon_component climacon_component-stroke_theSun climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north" d="M80.029,43.611h-3.998c-1.105,0-2-0.896-2-1.999s0.895-2,2-2h3.998c1.104,0,2,0.896,2,2S81.135,43.611,80.029,43.611z"></path>
                                    <path class="climacon_component climacon_component-stroke_theSun climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north" d="M72.174,30.3c-0.781,0.781-2.049,0.781-2.828,0c-0.781-0.781-0.781-2.047,0-2.828l2.828-2.828c0.779-0.781,2.047-0.781,2.828,0c0.779,0.781,0.779,2.047,0,2.828L72.174,30.3z"></path>
                                    <path class="climacon_component climacon_component-stroke_theSun climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north" d="M58.033,25.614c-1.105,0-2-0.896-2-2v-3.999c0-1.104,0.895-2,2-2c1.104,0,2,0.896,2,2v3.999C60.033,24.718,59.135,25.614,58.033,25.614z"></path>
                                    <path class="climacon_component climacon_component-stroke_theSun climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north" d="M43.892,30.3l-2.827-2.828c-0.781-0.781-0.781-2.047,0-2.828c0.78-0.781,2.047-0.781,2.827,0l2.827,2.828c0.781,0.781,0.781,2.047,0,2.828C45.939,31.081,44.673,31.081,43.892,30.3z"></path>
                                    <path class="climacon_component climacon_component-stroke_theSun climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north" d="M42.033,41.612c0,1.104-0.896,1.999-2,1.999h-4c-1.104,0-1.998-0.896-1.998-1.999s0.896-2,1.998-2h4C41.139,39.612,42.033,40.509,42.033,41.612z"></path>
                                    <path class="climacon_component climacon_component-stroke_theSun climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north" d="M43.892,52.925c0.781-0.78,2.048-0.78,2.827,0c0.781,0.78,0.781,2.047,0,2.828l-2.827,2.827c-0.78,0.781-2.047,0.781-2.827,0c-0.781-0.78-0.781-2.047,0-2.827L43.892,52.925z"></path>
                                    <path class="climacon_component climacon_component-stroke_theSun climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north" d="M58.033,57.61c1.104,0,2,0.895,2,1.999v4c0,1.104-0.896,2-2,2c-1.105,0-2-0.896-2-2v-4C56.033,58.505,56.928,57.61,58.033,57.61z"></path>
                                    <path class="climacon_component climacon_component-stroke_theSun climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north" d="M72.174,52.925l2.828,2.828c0.779,0.78,0.779,2.047,0,2.827c-0.781,0.781-2.049,0.781-2.828,0l-2.828-2.827c-0.781-0.781-0.781-2.048,0-2.828C70.125,52.144,71.391,52.144,72.174,52.925z"></path>
                                    </g>
                                    <g class="climacon_wrapperComponent climacon_wrapperComponent-sunBody">
                                    <circle class="climacon_component climacon_component-stroke_theSun climacon_component-stroke_sunBody" cx="58.033" cy="41.612" r="11.999"></circle>
                                    <circle class="climacon_component climacon_component-fill_theSun climacon_component-fill_sunBody" fill="#FFFFFF" cx="58.033" cy="41.612" r="7.999"></circle>
                                    </g>
                                </g>
                                <g class="climacon_wrapperComponent climacon_wrapperComponent-snowAlt">
                                    <g class="climacon_component climacon_component climacon_component-snowAlt">
                                    <path class="climacon_component climacon_component-stroke_theSnowFlake climacon_component-stroke_snowAlt" d="M43.072,59.641c0.553-0.957,1.775-1.283,2.732-0.731L48,60.176v-2.535c0-1.104,0.896-2,2-2c1.104,0,2,0.896,2,2v2.535l2.195-1.268c0.957-0.551,2.18-0.225,2.73,0.732c0.553,0.957,0.225,2.18-0.73,2.731l-2.196,1.269l2.196,1.268c0.955,0.553,1.283,1.775,0.73,2.732c-0.552,0.954-1.773,1.282-2.73,0.729L52,67.104v2.535c0,1.105-0.896,2-2,2c-1.104,0-2-0.895-2-2v-2.535l-2.195,1.269c-0.957,0.553-2.18,0.226-2.732-0.729c-0.552-0.957-0.225-2.181,0.732-2.732L46,63.641l-2.195-1.268C42.848,61.82,42.521,60.598,43.072,59.641z"></path>
                                    <circle class="climacon_component climacon_component-stroke_theSnowFlake climacon_component-fill_snowAlt" fill="#FFFFFF" cx="50" cy="63.641" r="2"></circle>
                                    </g>
                                </g>
                                <g class="climacon_componentWrap climacon_componentWrap_cloud">
                                    <path class="climacon_component climacon_component-stroke_theCloud climacon_component-stroke_cloud" d="M43.945,65.639c-8.835,0-15.998-7.162-15.998-15.998c0-8.836,7.163-15.998,15.998-15.998c6.004,0,11.229,3.312,13.965,8.203c0.664-0.113,1.338-0.205,2.033-0.205c6.627,0,11.998,5.373,11.998,12c0,6.625-5.371,11.998-11.998,11.998C57.168,65.639,47.143,65.639,43.945,65.639z"></path>
                                    <path class="climacon_component climacon_component-fill climacon_component-fill_cloud" fill="#FFFFFF" d="M59.943,61.639c4.418,0,8-3.582,8-7.998c0-4.417-3.582-8-8-8c-1.601,0-3.082,0.481-4.334,1.291c-1.23-5.316-5.973-9.29-11.665-9.29c-6.626,0-11.998,5.372-11.998,11.999c0,6.626,5.372,11.998,11.998,11.998C47.562,61.639,56.924,61.639,59.943,61.639z"></path>
                                </g>
                                </g>
                            </svg>`,     
    "cloudy-moon-snow-night" :   `<svg version="1.1" id="cloudSnowAltFill" class="climacon climacon_cloudSnowAltFill" viewBox="15 15 70 70">
                                    <g class="climacon_iconWrap climacon_iconWrap-cloudSnowAltFill">
                                    <g class="climacon_wrapperComponent climacon_wrapperComponent-moon climacon_componentWrap-moon_cloud">
                                        <path class="climacon_component climacon_component-stroke_theMoon climacon_component-stroke_sunBody" d="M61.023,50.641c-6.627,0-11.999-5.372-11.999-11.998c0-6.627,5.372-11.999,11.999-11.999c0.755,0,1.491,0.078,2.207,0.212c-0.132,0.576-0.208,1.173-0.208,1.788c0,4.418,3.582,7.999,8,7.999c0.614,0,1.212-0.076,1.788-0.208c0.133,0.717,0.211,1.452,0.211,2.208C73.021,45.269,67.649,50.641,61.023,50.641z"></path>
                                        <path class="climacon_component climacon_component-fill_theMoon climacon_component-fill_moon" fill="#FFFFFF" d="M59.235,30.851c-3.556,0.813-6.211,3.989-6.211,7.792c0,4.417,3.581,7.999,7.999,7.999c3.802,0,6.979-2.655,7.791-6.211C63.961,39.527,60.139,35.705,59.235,30.851z"></path>
                                    </g>
                                    <g class="climacon_wrapperComponent climacon_wrapperComponent-snowAlt">
                                        <g class="climacon_component climacon_component climacon_component-snowAlt">
                                        <path class="climacon_component climacon_component-stroke_theSnowFlake climacon_component-stroke_snowAlt" d="M43.072,59.641c0.553-0.957,1.775-1.283,2.732-0.731L48,60.176v-2.535c0-1.104,0.896-2,2-2c1.104,0,2,0.896,2,2v2.535l2.195-1.268c0.957-0.551,2.18-0.225,2.73,0.732c0.553,0.957,0.225,2.18-0.73,2.731l-2.196,1.269l2.196,1.268c0.955,0.553,1.283,1.775,0.73,2.732c-0.552,0.954-1.773,1.282-2.73,0.729L52,67.104v2.535c0,1.105-0.896,2-2,2c-1.104,0-2-0.895-2-2v-2.535l-2.195,1.269c-0.957,0.553-2.18,0.226-2.732-0.729c-0.552-0.957-0.225-2.181,0.732-2.732L46,63.641l-2.195-1.268C42.848,61.82,42.521,60.598,43.072,59.641z"></path>
                                        <circle class="climacon_component climacon_component-stroke_theSnowFlake climacon_component-fill_snowAlt" fill="#FFFFFF" cx="50" cy="63.641" r="2"></circle>
                                        </g>
                                    </g>
                                    <g class="climacon_componentWrap climacon_componentWrap_cloud">
                                        <path class="climacon_component climacon_component-stroke_theCloud climacon_component-stroke_cloud" d="M43.945,65.639c-8.835,0-15.998-7.162-15.998-15.998c0-8.836,7.163-15.998,15.998-15.998c6.004,0,11.229,3.312,13.965,8.203c0.664-0.113,1.338-0.205,2.033-0.205c6.627,0,11.998,5.373,11.998,12c0,6.625-5.371,11.998-11.998,11.998C57.168,65.639,47.143,65.639,43.945,65.639z"></path>
                                        <path class="climacon_component climacon_component-fill climacon_component-fill_cloud" fill="#FFFFFF" d="M59.943,61.639c4.418,0,8-3.582,8-7.998c0-4.417-3.582-8-8-8c-1.601,0-3.082,0.481-4.334,1.291c-1.23-5.316-5.973-9.29-11.665-9.29c-6.626,0-11.998,5.372-11.998,11.999c0,6.626,5.372,11.998,11.998,11.998C47.562,61.639,56.924,61.639,59.943,61.639z"></path>
                                    </g>
                                    </g>
                                </svg>`,
    "cloudy-sun-fog-day" :  `<svg version="1.1" id="cloudFogSunFill" class="climacon climacon_cloudFogSunFill" viewBox="15 15 70 70">
                            <clipPath id="cloudFillClip">
                            <path d="M15,15v70h70V15H15z M59.943,61.639c-3.02,0-12.381,0-15.999,0c-6.626,0-11.998-5.371-11.998-11.998c0-6.627,5.372-11.999,11.998-11.999c5.691,0,10.434,3.974,11.665,9.29c1.252-0.81,2.733-1.291,4.334-1.291c4.418,0,8,3.582,8,8C67.943,58.057,64.361,61.639,59.943,61.639z"></path>
                            </clipPath>
                            <clipPath id="sunCloudFillClip">
                            <path d="M15,15v70h70V15H15z M57.945,49.641c-4.417,0-8-3.582-8-7.999c0-4.418,3.582-7.999,8-7.999s7.998,3.581,7.998,7.999C65.943,46.059,62.362,49.641,57.945,49.641z"></path>
                            </clipPath>
                            <clipPath id="cloudSunFillClip">
                            <path d="M15,15v70h20.947V63.481c-4.778-2.767-8-7.922-8-13.84c0-8.836,7.163-15.998,15.998-15.998c6.004,0,11.229,3.312,13.965,8.203c0.664-0.113,1.338-0.205,2.033-0.205c6.627,0,11.998,5.373,11.998,12c0,5.262-3.394,9.723-8.107,11.341V85H85V15H15z"></path>
                            </clipPath>
                            <g class="climacon_iconWrap climacon_iconWrap-cloudFogSunFill">
                            <g clip-path="url(#cloudSunFillClip)">
                                <g class="climacon_componentWrap climacon_componentWrap-sun climacon_componentWrap-sun_cloud">
                                <g class="climacon_componentWrap climacon_componentWrap_sunSpoke">
                                    <path class="climacon_component climacon_component-stroke_theSun climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north" d="M80.029,43.611h-3.998c-1.105,0-2-0.896-2-1.999s0.895-2,2-2h3.998c1.104,0,2,0.896,2,2S81.135,43.611,80.029,43.611z"></path>
                                    <path class="climacon_component climacon_component-stroke_theSun climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north" d="M72.174,30.3c-0.781,0.781-2.049,0.781-2.828,0c-0.781-0.781-0.781-2.047,0-2.828l2.828-2.828c0.779-0.781,2.047-0.781,2.828,0c0.779,0.781,0.779,2.047,0,2.828L72.174,30.3z"></path>
                                    <path class="climacon_component climacon_component-stroke_theSun climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north" d="M58.033,25.614c-1.105,0-2-0.896-2-2v-3.999c0-1.104,0.895-2,2-2c1.104,0,2,0.896,2,2v3.999C60.033,24.718,59.135,25.614,58.033,25.614z"></path>
                                    <path class="climacon_component climacon_component-stroke_theSun climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north" d="M43.892,30.3l-2.827-2.828c-0.781-0.781-0.781-2.047,0-2.828c0.78-0.781,2.047-0.781,2.827,0l2.827,2.828c0.781,0.781,0.781,2.047,0,2.828C45.939,31.081,44.673,31.081,43.892,30.3z"></path>
                                    <path class="climacon_component climacon_component-stroke_theSun climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north" d="M42.033,41.612c0,1.104-0.896,1.999-2,1.999h-4c-1.104,0-1.998-0.896-1.998-1.999s0.896-2,1.998-2h4C41.139,39.612,42.033,40.509,42.033,41.612z"></path>
                                    <path class="climacon_component climacon_component-stroke_theSun climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north" d="M43.892,52.925c0.781-0.78,2.048-0.78,2.827,0c0.781,0.78,0.781,2.047,0,2.828l-2.827,2.827c-0.78,0.781-2.047,0.781-2.827,0c-0.781-0.78-0.781-2.047,0-2.827L43.892,52.925z"></path>
                                    <path class="climacon_component climacon_component-stroke_theSun climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north" d="M58.033,57.61c1.104,0,2,0.895,2,1.999v4c0,1.104-0.896,2-2,2c-1.105,0-2-0.896-2-2v-4C56.033,58.505,56.928,57.61,58.033,57.61z"></path>
                                    <path class="climacon_component climacon_component-stroke_theSun climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north" d="M72.174,52.925l2.828,2.828c0.779,0.78,0.779,2.047,0,2.827c-0.781,0.781-2.049,0.781-2.828,0l-2.828-2.827c-0.781-0.781-0.781-2.048,0-2.828C70.125,52.144,71.391,52.144,72.174,52.925z"></path>
                                </g>
                                <g class="climacon_wrapperComponent climacon_wrapperComponent-sunBody">
                                    <circle class="climacon_component climacon_component-stroke_theSun climacon_component-stroke_sunBody" cx="58.033" cy="41.612" r="11.999"></circle>
                                    <circle class="climacon_component climacon_component-fill_theSun climacon_component-fill_sunBody" fill="#FFFFFF" cx="58.033" cy="41.612" r="7.999"></circle>
                                </g>
                                </g>
                            </g>
                            <g class="climacon_wrapperComponent climacon_wrapperComponent-Fog">
                                <path class="climacon_component climacon_component-stroke_theCloud climacon_component-stroke_fogLine climacon_component-stroke_fogLine-top" d="M69.998,57.641H30.003c-1.104,0-2-0.895-2-2c0-1.104,0.896-2,2-2h39.995c1.104,0,2,0.896,2,2C71.998,56.746,71.104,57.641,69.998,57.641z"></path>
                                <path class="climacon_component climacon_component-stroke_theCloud climacon_component-stroke_fogLine climacon_component-stroke_fogLine-middle" d="M69.998,65.641H30.003c-1.104,0-2-0.896-2-2s0.896-2,2-2h39.995c1.104,0,2,0.896,2,2C71.998,64.744,71.104,65.641,69.998,65.641z"></path>
                                <path class="climacon_component climacon_component-stroke_theCloud climacon_component-stroke_fogLine climacon_component-stroke_fogLine-bottom" d="M30.003,69.639h39.995c1.104,0,2,0.896,2,2c0,1.105-0.896,2-2,2H30.003c-1.104,0-2-0.895-2-2C28.003,70.535,28.898,69.639,30.003,69.639z"></path>
                            </g>
                            <g class="climacon_wrapperComponent climacon_wrapperComponent-cloud">
                                <path class="climacon_component climacon_component-stroke_theCloud climacon_component-stroke_cloud" d="M59.999,45.643c-1.601,0-3.083,0.48-4.333,1.291c-1.232-5.317-5.974-9.291-11.665-9.291c-6.626,0-11.998,5.373-11.998,12h-4c0-8.835,7.163-15.999,15.998-15.999c6.004,0,11.229,3.312,13.965,8.204c0.664-0.113,1.337-0.205,2.033-0.205c5.222,0,9.651,3.342,11.301,8h-4.381C65.535,47.253,62.958,45.643,59.999,45.643z"></path>
                                <path class="climacon_component climacon_component-stroke_theCloud climacon_component-stroke_cloud" d="M71.287,49.355c-1.659-4.632-6.08-7.954-11.289-7.954c-0.695,0-1.369,0.091-2.033,0.205C55.229,36.72,50.004,33.413,44,33.413c-8.824,0-15.977,7.134-15.996,15.942H71.287z"></path>
                                <path fill="#FFFFFF" class="climacon_component climacon_component-fill climacon_component-fill_cloud" d="M66.897,49.376c-1.389-2.369-3.955-3.965-6.899-3.965c-1.602,0-3.082,0.48-4.334,1.291c-1.23-5.316-5.973-9.291-11.664-9.291c-6.615,0-11.977,5.354-11.996,11.965H66.897z"></path>
                            </g>
                            </g>
                        </svg>`,
    "cloudy-moon-fog-night" :  `<svg version="1.1" id="cloudFogMoonFill" class="climacon climacon_cloudFogMoonFill" xmlns="http://www.w3.org/2000/svg" viewBox="15 15 70 70">
                                <clipPath id="moonCloudFillClip">
                                <path d="M0,0v100h100V0H0z M60.943,46.641c-4.418,0-7.999-3.582-7.999-7.999c0-3.803,2.655-6.979,6.211-7.792c0.903,4.854,4.726,8.676,9.579,9.58C67.922,43.986,64.745,46.641,60.943,46.641z"></path>
                                </clipPath>
                                <g class="climacon_iconWrap climacon_iconWrap-cloudFogMoonFill">
                                <g clip-path="url(#cloudFillClip)">
                                    <g class="climacon_wrapperComponent climacon_wrapperComponent-moon climacon_componentWrap-moon_cloud">
                                    <path class="climacon_component climacon_component-stroke_theMoon climacon_component-stroke_sunBody" d="M61.023,50.641c-6.627,0-11.999-5.372-11.999-11.998c0-6.627,5.372-11.999,11.999-11.999c0.755,0,1.491,0.078,2.207,0.212c-0.132,0.576-0.208,1.173-0.208,1.788c0,4.418,3.582,7.999,8,7.999c0.614,0,1.212-0.076,1.788-0.208c0.133,0.717,0.211,1.452,0.211,2.208C73.021,45.269,67.649,50.641,61.023,50.641z"></path>
                                    <path class="climacon_component climacon_component-fill climacon_component-fill_moon" fill="#FFFFFF" d="M59.235,30.851c-3.556,0.813-6.211,3.989-6.211,7.792c0,4.417,3.581,7.999,7.999,7.999c3.802,0,6.979-2.655,7.791-6.211C63.961,39.527,60.139,35.705,59.235,30.851z"></path>
                                    </g>
                                </g>
                                <g class="climacon_wrapperComponent climacon_wrapperComponent-Fog">
                                    <path class="climacon_component climacon_component-stroke_theCloud climacon_component-stroke_fogLine climacon_component-stroke_fogLine-top" d="M69.998,57.641H30.003c-1.104,0-2-0.895-2-2c0-1.104,0.896-2,2-2h39.995c1.104,0,2,0.896,2,2C71.998,56.746,71.104,57.641,69.998,57.641z"></path>
                                    <path class="climacon_component climacon_component-stroke_theCloud climacon_component-stroke_fogLine climacon_component-stroke_fogLine-middle" d="M69.998,65.641H30.003c-1.104,0-2-0.896-2-2s0.896-2,2-2h39.995c1.104,0,2,0.896,2,2C71.998,64.744,71.104,65.641,69.998,65.641z"></path>
                                    <path class="climacon_component climacon_component-stroke_theCloud climacon_component-stroke_fogLine climacon_component-stroke_fogLine-bottom" d="M30.003,69.639h39.995c1.104,0,2,0.896,2,2c0,1.105-0.896,2-2,2H30.003c-1.104,0-2-0.895-2-2C28.003,70.535,28.898,69.639,30.003,69.639z"></path>
                                </g>
                                <g class="climacon_wrapperComponent climacon_wrapperComponent-cloud">
                                    <path class="climacon_component climacon_component-stroke_theCloud climacon_component-stroke_cloud" d="M59.999,45.643c-1.601,0-3.083,0.48-4.333,1.291c-1.232-5.317-5.974-9.291-11.665-9.291c-6.626,0-11.998,5.373-11.998,12h-4c0-8.835,7.163-15.999,15.998-15.999c6.004,0,11.229,3.312,13.965,8.204c0.664-0.113,1.337-0.205,2.033-0.205c5.222,0,9.651,3.342,11.301,8h-4.381C65.535,47.253,62.958,45.643,59.999,45.643z"></path>
                                    <path class="climacon_component climacon_component-stroke_theCloud climacon_component-stroke_cloud" d="M71.287,49.355c-1.659-4.632-6.08-7.954-11.289-7.954c-0.695,0-1.369,0.091-2.033,0.205C55.229,36.72,50.004,33.413,44,33.413c-8.824,0-15.977,7.134-15.996,15.942H71.287z"></path>
                                    <path fill="#FFFFFF" class="climacon_component climacon_component-fill climacon_component-fill_cloud" d="M66.897,49.376c-1.389-2.369-3.955-3.965-6.899-3.965c-1.602,0-3.082,0.48-4.334,1.291c-1.23-5.316-5.973-9.291-11.664-9.291c-6.615,0-11.977,5.354-11.996,11.965H66.897z"></path>
                                </g>
                                </g>
                            </svg>`,
    "cloudy-sun-thunderstorm-day" :  `<svg version="1.1" id="cloudLightningSunFill" class="climacon climacon_cloudLightningSunFill" viewBox="15 15 70 70">
                                        <g class="climacon_iconWrap climacon_iconWrap-cloudLightning">
                                        <g clip-path="url(#clip)">
                                            <g class="climacon_componentWrap climacon_componentWrap-sun climacon_componentWrap-sun_cloud">
                                            <g class="climacon_componentWrap climacon_componentWrap_sunSpoke">
                                                <path class="climacon_component climacon_component-stroke_theSun climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north" d="M80.029,43.611h-3.998c-1.105,0-2-0.896-2-1.999s0.895-2,2-2h3.998c1.104,0,2,0.896,2,2S81.135,43.611,80.029,43.611z"></path>
                                                <path class="climacon_component climacon_component-stroke_theSun climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north" d="M72.174,30.3c-0.781,0.781-2.049,0.781-2.828,0c-0.781-0.781-0.781-2.047,0-2.828l2.828-2.828c0.779-0.781,2.047-0.781,2.828,0c0.779,0.781,0.779,2.047,0,2.828L72.174,30.3z"></path>
                                                <path class="climacon_component climacon_component-stroke_theSun climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north" d="M58.033,25.614c-1.105,0-2-0.896-2-2v-3.999c0-1.104,0.895-2,2-2c1.104,0,2,0.896,2,2v3.999C60.033,24.718,59.135,25.614,58.033,25.614z"></path>
                                                <path class="climacon_component climacon_component-stroke_theSun climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north" d="M43.892,30.3l-2.827-2.828c-0.781-0.781-0.781-2.047,0-2.828c0.78-0.781,2.047-0.781,2.827,0l2.827,2.828c0.781,0.781,0.781,2.047,0,2.828C45.939,31.081,44.673,31.081,43.892,30.3z"></path>
                                                <path class="climacon_component climacon_component-stroke_theSun climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north" d="M42.033,41.612c0,1.104-0.896,1.999-2,1.999h-4c-1.104,0-1.998-0.896-1.998-1.999s0.896-2,1.998-2h4C41.139,39.612,42.033,40.509,42.033,41.612z"></path>
                                                <path class="climacon_component climacon_component-stroke_theSun climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north" d="M43.892,52.925c0.781-0.78,2.048-0.78,2.827,0c0.781,0.78,0.781,2.047,0,2.828l-2.827,2.827c-0.78,0.781-2.047,0.781-2.827,0c-0.781-0.78-0.781-2.047,0-2.827L43.892,52.925z"></path>
                                                <path class="climacon_component climacon_component-stroke_theSun climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north" d="M58.033,57.61c1.104,0,2,0.895,2,1.999v4c0,1.104-0.896,2-2,2c-1.105,0-2-0.896-2-2v-4C56.033,58.505,56.928,57.61,58.033,57.61z"></path>
                                                <path class="climacon_component climacon_component-stroke_theSun climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north" d="M72.174,52.925l2.828,2.828c0.779,0.78,0.779,2.047,0,2.827c-0.781,0.781-2.049,0.781-2.828,0l-2.828-2.827c-0.781-0.781-0.781-2.048,0-2.828C70.125,52.144,71.391,52.144,72.174,52.925z"></path>
                                            </g>
                                            <g class="climacon_wrapperComponent climacon_wrapperComponent-sunBody">
                                                <circle class="climacon_component climacon_component-stroke_theSun climacon_component-stroke_sunBody" cx="58.033" cy="41.612" r="11.999"></circle>
                                                <circle class="climacon_component climacon_component-fill climacon_component-fill_sunBody" fill="#FFFFFF" cx="58.033" cy="41.612" r="7.999"></circle>
                                            </g>
                                            </g>
                                        </g>
                                        <g class="climacon_wrapperComponent climacon_wrapperComponent-lightning">
                                            <polygon class="climacon_component climacon_component-stroke_theSun climacon_component-stroke_lightning" points="48.001,51.641 57.999,51.641 52,61.641 58.999,61.641 46.001,77.639 49.601,65.641 43.001,65.641 "></polygon>
                                        </g>
                                        <g class="climacon_componentWrap climacon_componentWrap_cloud">
                                            <path class="climacon_component climacon_component-stroke_theCloud climacon_component-stroke_cloud" d="M43.945,65.639c-8.835,0-15.998-7.162-15.998-15.998c0-8.836,7.163-15.998,15.998-15.998c6.004,0,11.229,3.312,13.965,8.203c0.664-0.113,1.338-0.205,2.033-0.205c6.627,0,11.998,5.373,11.998,12c0,6.625-5.371,11.998-11.998,11.998C57.168,65.639,47.143,65.639,43.945,65.639z"></path>
                                            <path class="climacon_component climacon_component-fill climacon_component-fill_cloud" fill="#FFFFFF" d="M59.943,61.639c4.418,0,8-3.582,8-7.998c0-4.417-3.582-8-8-8c-1.601,0-3.082,0.481-4.334,1.291c-1.23-5.316-5.973-9.29-11.665-9.29c-6.626,0-11.998,5.372-11.998,11.999c0,6.626,5.372,11.998,11.998,11.998C47.562,61.639,56.924,61.639,59.943,61.639z"></path>
                                        </g>

                                        </g>
                                    </svg>`,  
    "cloudy-moon-thunderstorm-night" :  `<svg version="1.1" id="cloudLightningMoonFill" class="climacon climacon_cloudLightningMoonFill" viewBox="15 15 70 70">
                                            <g class="climacon_iconWrap climacon_iconWrap-cloudLightningMoonFill">
                                            <g class="climacon_wrapperComponent climacon_wrapperComponent-moon climacon_componentWrap-moon_cloud">
                                                <path class="climacon_component climacon_component-stroke_theMoon climacon_component-stroke_sunBody" d="M61.023,50.641c-6.627,0-11.999-5.372-11.999-11.998c0-6.627,5.372-11.999,11.999-11.999c0.755,0,1.491,0.078,2.207,0.212c-0.132,0.576-0.208,1.173-0.208,1.788c0,4.418,3.582,7.999,8,7.999c0.614,0,1.212-0.076,1.788-0.208c0.133,0.717,0.211,1.452,0.211,2.208C73.021,45.269,67.649,50.641,61.023,50.641z"></path>
                                                <path class="climacon_component climacon_component-fill climacon_component-fill_moon" fill="#FFFFFF" d="M59.235,30.851c-3.556,0.813-6.211,3.989-6.211,7.792c0,4.417,3.581,7.999,7.999,7.999c3.802,0,6.979-2.655,7.791-6.211C63.961,39.527,60.139,35.705,59.235,30.851z"></path>
                                            </g>
                                            <g class="climacon_wrapperComponent climacon_wrapperComponent-lightning">
                                                <polygon class="climacon_component climacon_component-stroke_theSun climacon_component-stroke_lightning" points="48.001,51.641 57.999,51.641 52,61.641 58.999,61.641 46.001,77.639 49.601,65.641 43.001,65.641 "></polygon>
                                            </g>
                                            <g class="climacon_componentWrap climacon_componentWrap_cloud">
                                                <path class="climacon_component climacon_component-stroke_theCloud climacon_component-stroke_cloud" d="M43.945,65.639c-8.835,0-15.998-7.162-15.998-15.998c0-8.836,7.163-15.998,15.998-15.998c6.004,0,11.229,3.312,13.965,8.203c0.664-0.113,1.338-0.205,2.033-0.205c6.627,0,11.998,5.373,11.998,12c0,6.625-5.371,11.998-11.998,11.998C57.168,65.639,47.143,65.639,43.945,65.639z"></path>
                                                <path class="climacon_component climacon_component-fill climacon_component-fill_cloud" fill="#FFFFFF" d="M59.943,61.639c4.418,0,8-3.582,8-7.998c0-4.417-3.582-8-8-8c-1.601,0-3.082,0.481-4.334,1.291c-1.23-5.316-5.973-9.29-11.665-9.29c-6.626,0-11.998,5.372-11.998,11.999c0,6.626,5.372,11.998,11.998,11.998C47.562,61.639,56.924,61.639,59.943,61.639z"></path>
                                            </g>
                                            </g>
                                        </svg>`,                                                                                                                   
}

var icon = (iconType, precipType) => {
    if (precipType) {
        if (iconType === "rain") {
            return dict["sleet"]
        }
        var dt = iconType +"-"+ precipType;
        if (dict[dt]) {
            // console.log(dt)
            return dict[dt]  
        } 
    }
    return dict[iconType]
}

const address =  document.querySelector('#enterAddress');
const formattedAddress =  document.querySelector('#formattedAddress');
const tempData = document.querySelector('#tempData');
const tempPreci =  document.querySelector('#tempPreci');
const tempWind = document.querySelector('#tempWind');
const tempHumid = document.querySelector('#tempHumid');
const changeDateTime = document.querySelector('#dateTime');

tempData.textContent = ''
formattedAddress.textContent = ''
tempPreci.textContent = ''
tempWind.textContent = ''
tempHumid.textContent = ''
changeDateTime.textContent = ''

var changeWeather = (re_data) => {
    var the_icon = icon(re_data.icon,re_data.precipType)
    $("#main_svg").empty();
    $("#main_svg").append(the_icon);
    var dt = dateFormat(re_data);
    var td = timeFormat(re_data.time)
    formattedAddress.textContent = 'Weather in ' + re_data.address;
    tempPreci.textContent = Math.trunc(re_data.preci * 100);
    tempWind.textContent = re_data.windSpeed;
    tempHumid.textContent = Math.trunc(re_data.humidity * 100);
    tempData.innerHTML = `${re_data.temp}<small>°F</small><br/><small>${re_data.summary}</small>`;
    changeDateTime.innerHTML = `Date: <span class="kt-font-success">${dt}</span> Time: <span class="kt-font-success">${td}</span>`;
    // console.log(re_data.hourly.data[0].precipProbability)
    $('.kt-widget5__stats').each(function(i) {
        $(this).empty();
        $(this).append('<span class="kt-widget5__number">Precipitation: ' + Math.trunc(re_data.hourly.data[i + 1].precipProbability * 100)+'%</span>'+
        '<span class="kt-widget5__number">Wind: ' +re_data.hourly.data[i + 1].windSpeed+'km/h</span>'+
        '<span class="kt-widget5__number">Humidity: ' +Math.trunc(re_data.hourly.data[i + 1].humidity * 100)+'%</span>');
        ++i;
    });
}
var dateFormat= (re_data) => {
    var date = new Date().toLocaleString("en-US", {timeZone: re_data.timezone});
    date = new Date(date);
    var dt = date.toLocaleString().split(",");
    return dt[0]
}

var timeFormat = (unix_timestamp) => {
    var dt = new Date(unix_timestamp*1000);
    var hours = dt.getHours();
    if (hours - 12 === 0) {
        dt = "12 AM"
    } else if (hours === 12) {
        dt = dt.getHours() + " PM"
    }else if (hours > 12) {
        dt = dt.getHours() - 12 + " PM"
    }else if (hours < 12) {
        dt = dt.getHours() + " AM"
    }
    return dt
}
var changeTempAndDate = (re_data) => {
    
    
    $('.kt-widget5__section').each(function(i) {
        var dt = dateFormat(re_data);
        var td = timeFormat(re_data.hourly.data[i + 1].time)
        // console.log(td);
        $(this).empty();
        $(this).append(`<div class="kt-widget__action">
        <span class="btn btn-label-info btn-sm">${re_data.hourly.data[i + 1].temperature }<small>°F</small></span>

    </div>
    <p class="kt-widget5__desc">
        ${re_data.hourly.data[i + 1].summary }
    </p>
    <div class="kt-widget5__info">
        <span>Date:</span>
        <span class="kt-font-info">${dt}</span>
        <span>Time:</span>
        <span class="kt-font-info">${td}</span>
    </div>`);
    });
    $('.kt-widget5__pic').each(function(i) {
        var the_icon = icon(re_data.hourly.data[i + 1].icon,re_data.hourly.data[i + 1].precipType)
        $(this).empty();
        $(this).append(the_icon);
    });
    
}

var KTBootstrapNotifyDemo = function () {
    
    // Private functions

    // basic demo
    var demo = function () {
        // init bootstrap switch

        // handle the demo
        $("#enterAddress").keyup(function(event) {
            if (event.keyCode === 13) {
                $("#kt_notify_btn").click();
            }
        });

        $('#kt_notify_btn').click(function() {
            var content = {};
            $("#weather_div").fadeIn("fast");
            $("#weather_loader").fadeIn("fast");
            $('html, body').animate({
                scrollTop: $("#weather_div").offset().top - 50
            }, 2000);
            fetch(`/weather?address=${address.value}`).then((response) => {
                response.json().then((re_data) => {
                    if (re_data.error) {
                        content.message = re_data.error;
                        var notify = $.notify(content, { 
                            type: "info",
                            allow_dismiss: true,
                            newest_on_top: true,
                            mouse_over:  "pause",
                            showProgressbar:  false,
                            spacing: 10,                    
                            timer: 1000,
                            placement: {
                                from: "top", 
                                align: "right"
                            },
                            offset: {
                                x: 20, 
                                y: 20
                            },
                            delay: 4000,
                            z_index: 999,
                            animate: {
                                enter: 'animated fadeIn',
                                exit: 'animated fadeOut'
                            }
                        });
                        $('html, body').animate({
                            scrollTop: $("#main_head").offset().top
                        }, 2000);
                        $("#weather_div").fadeOut("slow");
                        $("#weather_loader").fadeOut("slow");
                       
                    }
                    else{
                        
                        changeWeather(re_data);
                        changeTempAndDate(re_data);
                        $("#weather_loader").fadeOut("slow");
                        
                    }
                })
            })
            

            
        });
    }

    return {
        // public functions
        init: function() {
            demo();
        }
    };
}();

jQuery(document).ready(function() {    
    KTBootstrapNotifyDemo.init();
});