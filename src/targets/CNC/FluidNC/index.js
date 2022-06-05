/*
 index.js - ESP3D WebUI Target file

 Copyright (c) 2020 Luc Lebosse. All rights reserved.

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
import { h } from "preact"
import { iconsTarget } from "./icons"
import { files } from "./files"
import { processor } from "./processor"
import { defaultPanelsList } from "./panels"
import { MachineSettings } from "./MachineSettings"
import { InformationsControls, QuickButtonsBar } from "./Controls"
import { AppLogo as WebUILogo } from "../../../components/Images/logo"
import { AppLogo } from "./logo"
import {
    TargetContextProvider,
    useTargetContext,
    useTargetContextFn,
} from "./TargetContext"
import realCommandsTable from "./realCommandsTable"
/*
GRBL            10
MARLIN          20
MARLIN_EMBEDDED 30
SMOOTHIEWARE    40
REPETIER        50
FLUIDNC         60
REPRAP          70
*/
const TargetName = "FluidNC"
const TargetType = "CNC"
const TargetId = 60
const Target = "FluidNC"
const webUIbuild = "F2"
const Name = "FluidNC"
const fwUrl = "https://github.com/bdring/FluidNC"

const restartdelay = 30
const variablesList = [...realCommandsTable]

export {
    MachineSettings,
    Target,
    TargetId,
    TargetName,
    TargetType,
    fwUrl,
    Name,
    files,
    iconsTarget,
    processor,
    restartdelay,
    defaultPanelsList,
    TargetContextProvider,
    useTargetContext,
    useTargetContextFn,
    webUIbuild,
    InformationsControls,
    variablesList,
    AppLogo,
    WebUILogo,
    QuickButtonsBar,
}