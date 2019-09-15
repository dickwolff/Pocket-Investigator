// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: "",
    frameworks: ["jasmine", "@angular-devkit/build-angular"],
    plugins: [
      require("karma-jasmine"),
      require("karma-chrome-launcher"),
      require("karma-jasmine-html-reporter"),
      require("karma-coverage-istanbul-reporter"),
      require("@angular-devkit/build-angular/plugins/karma"),
      require("karma-junit-reporter"),
      require("karma-mocha-reporter")
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser.
    },
    coverageIstanbulReporter: {
      dir: require("path").join(__dirname, "coverage"),
      reports: ["html", "lcovonly", "cobertura"],
      fixWebpackSourcePaths: true,
      thresholds: {
        statements: 80,
        lines: 80,
        branches: 80,
        functions: 80
      }
    },
    angularCli: {
      environment: "dev"
    },
    reporters: ["mocha", "kjhtml", "junit"],
    mochaReporter: {
      ignoreSkipped: true
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["CustomChromeHeadless"],
    customLaunchers: {
      CustomChromeHeadless: {
        base: "Chrome",
        flags: ["--disable-translate", "--headless", "--disable-gpu", "--disable-extensions", "--remote-debugging-port=9222"]
      }
    },
    singleRun: false,
    junitReporter: {
      outputDir: "", // Results of the test run will be saved in the format `$outputDir/$browserName.xml`.
      outputFile: "PocketInvestigator.TestRun.xml"
    },
    browserDisconnectTolerance: 2,
    browserDisconnectTimeout: 40000,
    browserNoActivityTimeout: 40000
  });
};
