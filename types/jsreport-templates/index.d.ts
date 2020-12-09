// Type definitions for jsreport-templates 2.4
// Project: https://github.com/jsreport/jsreport-templates
// Definitions by: pofider <https://github.com/pofider>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { ExtensionDefinition, Template } from 'jsreport-core';

declare namespace JsReportTemplates {
    interface NamedTemplate extends Template {
        name?: string;
    }
}

declare module 'jsreport-core' {
    interface TemplateRegistry {
        NamedTemplate: JsReportTemplates.NamedTemplate;
    }
}

declare function JsReportTemplates(): ExtensionDefinition;

export = JsReportTemplates;
