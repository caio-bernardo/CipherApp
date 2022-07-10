<script>

const ciphers = [
  {value: "cesar", name: "César"},
  {value: "vigenere", name: "Vigenere"}

];

</script>

<label for="select-cipher">Escolha uma cifra:</label>

<select name="select-cipher" id="select-cipher">
  {#each ciphers as cipher}
    <option value="{cipher.value}">{cipher.name}</option> 
  {/each}
</select>
