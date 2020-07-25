
import React from "react";
import {useSelector} from "react-redux";
import './consolidationStation.styles.scss';
import CustomTable from "../../components/customTable/customTable.component";


function ConsolidationStation() {


    const currentUser = useSelector(state=> state.currentUser)


    return(
        <div>
            <h1>Consolidation Station</h1>
            <CustomTable />

        </div>
    )
}

export default ConsolidationStation