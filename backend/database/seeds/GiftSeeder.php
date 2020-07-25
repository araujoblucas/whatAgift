<?php

use Illuminate\Database\Seeder;

class GiftSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('gifts')->insert([
            'id' => 1,
            'name' => 'Flores - Dia dos Namorados',
            'description' => 'Conheça a história do buquê de flores


            Supõe-se que os buquês eram um hábito dos antigos romanos. No dia da cerimônia de casamento, as mães das noivas ofereciam para as suas filhas um molho de flores amarradas, com o objetivo de levar bons aromas para a nova vida de casada.

            Por outro lado, Alan Macfarlane, antropólogo e historiador inglês, afirma que o buquê surgiu na Idade Média, como um tipo de amuleto contra o mau olhado. No princípio, ele era montado com ervas aromáticas. Outra versão da história do mimo também remonta à Idade Média. Acredita-se que a noiva, enquanto fazia o trajeto até o local da cerimônia, colhia flores e ervas que eram jogadas pelas pessoas (convidados ou estranhos) que lhe desejavam sorte e felicidade.

            Todas as histórias referentes ao surgimento do buquê de flores são bastantes interessantes, concorda? Além disso, todas fazem sentido se compararmos o uso do molho de plantas colhidas nos dias atuais. Seguimos ofertando o mesmo presente como forma de desejar nossos bons sentimentos. Por isso, o ideal é que saibamos montar um buquê bem apresentável.



            Saiba como montar buquê de flores


            Quem não se encanta com um maravilhoso buquê? Constituído por flores de diversas espécies, formas e tamanhos, ele traduz os melhores pensamentos que você tem para com quem ama. Portanto, para fazer bonito em ocasiões especiais ou emocionar o seu amor, confira as nossas dicas de como montar um buquê inesquecível!',
            'cost' => '2',
            'user_id' => '1',
            'image' => 'https://github.com/araujoblucas/whatAgift/blob/master/frontend/src/img/gift1.jpg?raw=true',
            'tags' => 'valentines,DiaDosNamorados,flores',

        ]);

        DB::table('gifts')->insert([
            'id' => 2,
            'name' => 'Bolo de Aniversário',
            'description' => 'Se você já não aguenta mais pagar um preço caríssimo por um simples bolo de aniversário, que tal aprender como fazer massa de bolo de aniversário com a mesma receita que é usada na confeitaria e também por muitas padarias? Muita gente acha que para fazer um bolo bonito, saboroso igual aqueles de vitrine, precisa ser uma confeiteira profissional, mas isso é um engano! Porque apenas com força de vontade e uma boa receita de massa de bolo de aniversário passo a passo, você conseguirá fazer o seu bolo de aniversario idêntico aquele que fica na vitrine da sua padaria preferida. Outro engano é achar que para fazer a massa de bolo de aniversário gasta-se muito dinheiro. Nada disso! Para fazer uma massa de bolo de aniversário aerada, fofinha, gostosa que combina com vários recheios e várias coberturas, você precisará usar apenas 3 ingredientes simples que eu tenho certeza que todo mundo vai ter em casa, que é: Ovo, farinha de trigo e açúcar. Só isso! Essa é a massa base usada para fazer bolo de aniversário, bolo de casamento, bolo de formatura, bolo de debutante e vários outros bolos de festa. Para te ajudar ainda mais, eu vou deixar no final dessa receita algumas outras receitas que vão te auxiliar a fazer um belo bolo. Massa de Bolo de Aniversário.

            Massa de Bolo de Aniversário
            Ingredientes:
            8 ovos
            2 xícaras (chá) de farinha de trigo (sem fermento)
            1 e 1/2 xícaras (chá) açúcar
            Modo de Preparo:
            Peneire a farinha de trigo e o açúcar separadamente, antes de começar a fazer o bolo.
            Despeje os ovos na batedeira e deixe bater por 8 minutos e em velocidade alta.
            Massa de Bolo de Aniversário

            DICA: Para não deixa o bolo com cheiro de ovo, retire a película das gemas.
            Passado os 8 minutos, diminua para velocidade baixa e vá acrescentando o açúcar bem aos poucos.
            Depois de colocar todo o açúcar, aumente a velocidade novamente e deixe bater por mais 8 minutos.
            Em seguida desligue a batedeira e adicione a farinha de trigo aos poucos, colocando com uma colher e misturando com um batedor de arame (fouet).
            Massa de Bolo de Aniversário

            DICA: Faça movimentos circulares, de baixo para cima, sempre delicadamente para que não se perca a leveza da massa.
            Com a ajuda de uma tesoura, recorte um peço de papel manteiga no mesmo tamanho do fundo da sua forma.
            Massa de Bolo de Aniversário

            Depois unte o fundo da forma e acomode o papel manteiga.
            Despeje a massa na forma (20×10) e leve para assar em forno preaquecido, 180º, por cerca de 40 minutos ou até dourar.
            DICA: Não tem necessidade de untar as laterais da forma. Pois a ideia é que o bolo vá se agarrando nas laterais e crescendo de maneira uniforme para não murchar depois.
            Aguarde o bolo esfriar e desenforme passando uma faquinha nas laterais da forma.',
            'cost' => '1',
            'user_id' => '2',
            'image' => 'https://github.com/araujoblucas/whatAgift/blob/master/frontend/src/img/gift2.jpg?raw=true',
            'tags' => 'birthday,aniversário',
        ]);

        DB::table('gifts')->insert([
            'id' => 3,
            'name' => 'Livro',
            'description' => 'Para começar a busca tenha referências sobre o gosto do leitor. Saber, por exemplo, se o presenteado tem hábito de leitura é importante. “Descobrir qual foi o último livro que leu e gostou, quem são os autores preferidos, o gênero favorito – romance, biografia, não-ficção – ou se é um leitor eclético, enfim, todas essas informações ajudam muito”, sugere Hillé Puonto, livreira e autora do blog Manual Prático de Bons Modos em Livrarias. Lista de presente: Confira 40 indicações de livros a partir de R$ 9,90 +34 Livros de crônicas são "coringas" quando não se tem muitas informações sobre o presenteado (Luís Fernando Veríssimo é quase uma unanimidade). Relatos de viagens, livros... - Veja mais em ',
            'cost' => '2',
            'user_id' => '1',
            'image' => 'https://github.com/araujoblucas/whatAgift/blob/master/frontend/src/img/gift3.jpg?raw=true',
            'tags' => 'man,girl,boy,woman,gift,unisex,menino,menina',

        ]);
    }
}
