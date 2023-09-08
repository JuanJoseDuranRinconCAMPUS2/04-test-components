import { render } from "@testing-library/react";
import Table from "../../src/components/Table"

describe("Captura del componente <Table.jsx>", ()=>{
    test('Fotito :3', () => { 
        let {container} = render(<Table/>);
        expect(container).toMatchSnapshot();
    })
})

//para cambiar el componenete y forzar a que se cambie la snapshot preciona "U" cuando haya error