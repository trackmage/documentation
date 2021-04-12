import React, {ReactElement, ReactNode} from "react";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

interface Carrier {
    code?: string;
    name?: string;
}

const CarriersList = (): JSX.Element => {
    const {siteConfig} = useDocusaurusContext();
    const {carriersJSON} = siteConfig.customFields;

    return (
        <div>
            <table className="carriersList-table">
                <thead>
                    <tr>
                        <th>Code</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {carriersJSON.map((carrier: Carrier) =>
                        <tr>
                            <td>{carrier.code}</td>
                            <td>{carrier.name}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    ) as ReactElement;
}

export default CarriersList;
