import * as React from "react";
import styles from "./SiteRequest.module.scss";
import { ISiteRequestProps } from "./ISiteRequestProps";
import { ISiteRequestState } from "./ISiteRequestState";
import { escape } from "@microsoft/sp-lodash-subset";
import { Dialog, DialogType, DialogFooter, IDialogContentProps } from "office-ui-fabric-react/lib/Dialog";

import { PrimaryButton, DefaultButton } from "office-ui-fabric-react/lib/Button";
import { autobind } from "@uifabric/utilities";
import NewRequest from "./NewRequest";
export default class SiteRequest extends React.Component<ISiteRequestProps, ISiteRequestState> {
  public constructor() {
    super();
    this.state = {
      hideMyRequestsDialog: true,
      hideNewRequestDialog: true
    }
  }
  @autobind
  private _showNewRequestDialog() {
    this.setState({ ...this.state, hideNewRequestDialog: false });
  }

  @autobind
  private _closeDialog() {
    this.setState({ ...this.state, hideNewRequestDialog: true });
  }
  public render(): React.ReactElement<ISiteRequestProps> {
    return (
      <div>
        <DefaultButton
          description="Opens the Sample Dialog"
          onClick={this._showNewRequestDialog}
          text="Open Dialog"
        />
        <Dialog
          isOpen={!this.state.hideNewRequestDialog}
          onDismiss={this._closeDialog}
        >
          <div>
            <NewRequest />
        </div>

          <DialogFooter>
            <PrimaryButton onClick={this._closeDialog} text="Save" />
            <DefaultButton onClick={this._closeDialog} text="Cancel" />
          </DialogFooter>
        </Dialog>
      </div>
    );

  }
}
