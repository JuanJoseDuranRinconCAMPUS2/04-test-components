import { render } from "@testing-library/react";
import Header from "../../src/components/Header.jsx";

describe("Captura del componente <Header.jsx>", ()=>{
    test('Fotito :3', () => { 
        let {container} = render(<Header/>);
        expect(container).toMatchSnapshot();
    })
})
