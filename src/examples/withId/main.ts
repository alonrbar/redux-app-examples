import { bootstrap } from 'aurelia-bootstrapper';
import { Aurelia, PLATFORM } from 'aurelia-framework';

//
// bootstrap Aurelia
//

bootstrap((aurelia: Aurelia) => {

    aurelia.use
        .standardConfiguration()
        .developmentLogging();

    aurelia.start()
    .then(() => aurelia.setRoot(PLATFORM.moduleName('examples/withId/view/app'), document.body));
});