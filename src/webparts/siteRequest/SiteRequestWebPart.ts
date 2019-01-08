import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'siteRequestStrings';
import SiteRequest from './components/SiteRequest';
import { ISiteRequestProps } from './components/ISiteRequestProps';
import { ISiteRequestWebPartProps } from './ISiteRequestWebPartProps';

export default class SiteRequestWebPart extends BaseClientSideWebPart<ISiteRequestWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ISiteRequestProps > = React.createElement(
      SiteRequest,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
