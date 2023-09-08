import { render } from "@testing-library/react";
import Section from "../../src/components/Section";

describe("Captura del componente <Seccion.jsx>", ()=>{
    test('Fotito :3', () => { 
        let {container} = render(<Section/>);
        expect(container).toMatchSnapshot();
    })
})
