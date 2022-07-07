/*
SpindleCNC.js - ESP3D WebUI component file

 Copyright (c) 2021 Luc LEBOSSE. All rights reserved.

 This code is free software; you can redistribute it and/or
 modify it under the terms of the GNU Lesser General Public
 License as published by the Free Software Foundation; either
 version 2.1 of the License, or (at your option) any later version.
 This code is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 Lesser General Public License for more details.
 You should have received a copy of the GNU Lesser General Public
 License along with This code; if not, write to the Free Software
 Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
*/

import { Fragment, h } from "preact"
import { T } from "../Translations"
import { Target, PlayCircle, PauseCircle, StopCircle } from "preact-feather"
import { useUiContext, useUiContextFn } from "../../contexts"
import { useTargetContext } from "../../targets"
import { ButtonImg } from "../Controls"
import { useHttpFn } from "../../hooks"
import { espHttpURL } from "../Helpers"

/*
 * Local const
 *
 */

const SpindleControls = () => {
    //const { status } = useTargetContext()
    if (!useUiContextFn.getValue("showspindlepanel")) return null
    return null
    return (
        <Fragment>
            {1 && (
                <div class="status-ctrls">
                    <div
                        class="extra-control mt-1 tooltip tooltip-bottom"
                        data-tooltip={T("CN36")}
                    >
                        <div class="extra-control-header">
                            {"status.printState.status"}
                        </div>
                        {0 && (
                            <div class="extra-control-value">
                                {"status.filename"}
                            </div>
                        )}
                        <div class="extra-control-value">
                            {"status.printState.progress"}%
                        </div>
                    </div>
                </div>
            )}
            {1 && (
                <div class="status-ctrls">
                    <div
                        class="status-control mt-1 tooltip tooltip-bottom"
                        data-tooltip={T("CN36")}
                    >
                        <div class="status-control-header">{T("CN36")}</div>
                        <div class="status-control-value">{"status.state"}</div>
                    </div>
                </div>
            )}
        </Fragment>
    )
}

const SpindlePanel = () => {
    const { toasts, panels } = useUiContext()
    //const { status } = useTargetContext()
    const { createNewRequest } = useHttpFn
    const id = "SpindlePanel"
    const hidePanel = () => {
        useUiContextFn.haptic()
        panels.hide(id)
    }

    console.log("Spindle panel")
    const sendCommand = (command) => {
        createNewRequest(
            espHttpURL("command", { cmd: command }),
            { method: "GET", echo: command },
            {
                onSuccess: (result) => {},
                onFail: (error) => {
                    toasts.addToast({ content: error, type: "error" })
                    console.log(error)
                },
            }
        )
    }
    return (
        <div class="panel panel-dashboard">
            <div class="navbar">
                <span class="navbar-section feather-icon-container">
                    <Target />
                    <strong class="text-ellipsis">{T("CN36")}</strong>
                </span>
                <span class="navbar-section">
                    <span style="height: 100%;">
                        <span
                            class="btn btn-clear btn-close m-1"
                            aria-label="Close"
                            onclick={hidePanel}
                        />
                    </span>
                </span>
            </div>
            <div class="panel-body panel-body-dashboard">
                <SpindleControls />
                Spindle Panel
            </div>
        </div>
    )
}

const SpindlePanelElement = {
    id: "SpindlePanel",
    content: <SpindlePanel />,
    name: "CN36",
    icon: "Target",
    show: "showspindlepanel",
    onstart: "openspindleonstart",
}

export { SpindlePanel, SpindlePanelElement, SpindleControls }