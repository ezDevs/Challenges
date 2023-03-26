## Instruções

Neste desafio, você receberá uma mensagem secreta e um deslocamento (número inteiro) como entrada. O objetivo é criar uma função que codifique a mensagem usando a cifra de César. A cifra de César é uma técnica de criptografia de substituição simples na qual cada letra na mensagem é substituída por outra letra que está um número fixo de posições (deslocamento) adiante no alfabeto. A codificação deve ser aplicada apenas às letras do alfabeto (maiúsculas e minúsculas); outros caracteres (números, espaços, pontuação, etc.) devem permanecer inalterados.

### Etapa 1: Criar a função de codificação
Crie uma função chamada **`encodeCaesarCipher`** que aceite dois argumentos: a mensagem e o deslocamento. A função deve iterar por cada caractere na mensagem.

### Etapa 2: Verificar se o caractere é uma letra
Para cada caractere na mensagem, verifique se é uma letra maiúscula ou minúscula. Se não for uma letra, mantenha o caractere original.

### Etapa 3: Codificar a mensagem
Se o caractere for uma letra, aplique a cifra de César usando o deslocamento fornecido. Lembre-se de manter a letra dentro dos limites do alfabeto (por exemplo, 'z' com um deslocamento de 1 deve se tornar 'a').

### Etapa 4: Retornar a mensagem codificada
Após iterar por todos os caracteres da mensagem, retorne a mensagem codificada.