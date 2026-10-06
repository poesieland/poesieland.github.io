(function () {
    function installFrenchLunrHook() {
        if (!window.lunr || !window.lunr.multiLanguage) {
            setTimeout(installFrenchLunrHook, 0);
            return;
        }

        const originalMultiLanguage = lunr.multiLanguage;

        function normalizeFrenchLigatures(token) {
            return token.update(function (value) {
                return value
                    .replace(/œ/g, 'oe')
                    .replace(/Œ/g, 'oe');
            });
        }

        lunr.multiLanguage = function (...languages) {
            const plugin = originalMultiLanguage.apply(this, languages);

            return function (builder) {
                plugin.call(this, builder);

                builder.pipeline.add(normalizeFrenchLigatures);
                builder.searchPipeline.add(normalizeFrenchLigatures);
            };
        };
    }

    installFrenchLunrHook();
})();