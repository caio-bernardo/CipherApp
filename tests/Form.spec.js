import { render, screen, fireEvent } from "@testing-library/svelte";
import Form from '../src/lib/Form.svelte';

// TODO fix wrong test enviromento for testing-library/svelte
describe('Submit a Mensage', () => {

    it('should encrypt with cesar cipher', async () => {
        render(Form);

        const inputMsg = screen.getElementById("inmsg");
        const msg = "abcd";

        const inputKey = screen.getElementById('key');
        const key = 1;

        await fireEvent.input(inputMsg, {target: { msg }});
        await fireEvent.input(inputKey, {target: { key }});

        await fireEvent.click(screen.getByText('Encriptar'));
        
        
    });

});