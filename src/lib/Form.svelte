<script>
    import ciphers from './cipher_functions';

    let selected = ciphers[0];
    let description = selected.desc;

    function handleSubmit(fdata) {
        const submitter = fdata.submitter.name;
        const formData = new FormData(fdata.target);

        const data = {};
        for (let field of formData) {
            const [key, value] = field;
            data[key] = value;
        }

        encryptMsg(data, submitter);
    }

    function encryptMsg(data, submitter) {
        const msg = data.inmsg;
        const key = data.key;
        const desencryptFlag = (submitter === 'desencrypt')? true : false;

        const result = selected.encrypt(msg, key, desencryptFlag);

        // TODO return this value to App component (response variable)
        console.log(result);
    }

</script>

<form on:submit|preventDefault="{handleSubmit}">
    <!--TODO Add labels-->
    <select bind:value="{selected}" on:change="{() => {description = selected.desc}}" name="selectCipher" id="selectCipher">
      {#each ciphers as cipher}
        <option value="{cipher}">{cipher.name}</option>
      {/each}
    </select>
    
    <!--TODO Sanitize this-->
    {@html description? description : ""}
 
    <input type="text" name="key">
    
    <textarea name="inmsg" id="inmsg" cols="80" rows="10"></textarea>

    <button type="submit" name="encrypt">Encriptar</button>
    <button type="submit" name="desencrypt">Desencriptar</button>

</form>