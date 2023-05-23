

        
                
        function encode(string){
            var encodeInput = btoa(string)
            document.getElementById('result').innerHTML=encodeInput

            return encodeInput ;
        }

        function decode(string){
            var decodeInput = atob(string)
            document.getElementById('result').innerHTML=decodeInput
            return decodeInput
        }




        function ifShow(){
            document.getElementById('div2').style.display='none';
            document.getElementById('div1').style.display='inline';
        }

        function copiar(){
            let toCopy = document.getElementById('result');
            let boton = document.getElementById('copyResult');

            navigator.clipboard.writeText(toCopy.textContent);
            alert("Resultado copiado")
        }