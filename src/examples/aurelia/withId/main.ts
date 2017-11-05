import "reflect-metadata";
import { bootstrap } from 'aurelia-bootstrapper';
import { Aurelia, PLATFORM } from 'aurelia-framework';
import "aurelia-loader-webpack";

//
// bootstrap Aurelia
//

bootstrap((aurelia: Aurelia) => {

    aurelia.use
        .standardConfiguration()
        .developmentLogging();

    aurelia.start()
    .then(() => aurelia.setRoot(PLATFORM.moduleName('examples/aurelia/withId/view/app'), document.body));
});