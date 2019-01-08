import * as React from "react";
import styles from "./SiteRequest.module.scss";
import { INewRequestProps } from "./INewRequestProps";
import { INewRequestState } from "./INewRequestState";


import { TextField } from "office-ui-fabric-react/lib/TextField";
import { Label } from "office-ui-fabric-react/lib/Label";

import { PrimaryButton, DefaultButton } from "office-ui-fabric-react/lib/Button";
import { autobind } from "@uifabric/utilities";
export default class SiteRequest extends React.Component<INewRequestProps, INewRequestState> {
    public constructor() {
        super();
        debugger;
        this.state = {
            isDirty: false,
            siteTitle: "",

        }

    }
    public setDirty(isDirty: boolean) {
        this.state.isDirty = isDirty;
    }
    public render(): React.ReactElement<INewRequestProps> {
        return (
            <div>
                <table>

                    <tr>
                        <td>
                            <Label required={true}>Site Title</Label>
                        </td>
                        <td>
                            <TextField value={this.state.siteTitle} onChanged={e => {
                                this.setDirty(true);
                                this.state.siteTitle = e;
                                this.setState(this.state);
                            }} />
                        </td>

                    </tr>
                </table>

            </div>

        );

    }
}

