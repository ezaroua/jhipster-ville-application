package fr.esgi.ville.domain;

import static fr.esgi.ville.domain.JoueurTestSamples.*;
import static fr.esgi.ville.domain.VilleTestSamples.*;
import static org.assertj.core.api.Assertions.assertThat;

import fr.esgi.ville.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

class JoueurTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Joueur.class);
        Joueur joueur1 = getJoueurSample1();
        Joueur joueur2 = new Joueur();
        assertThat(joueur1).isNotEqualTo(joueur2);

        joueur2.setId(joueur1.getId());
        assertThat(joueur1).isEqualTo(joueur2);

        joueur2 = getJoueurSample2();
        assertThat(joueur1).isNotEqualTo(joueur2);
    }

    @Test
    void villeTest() {
        Joueur joueur = getJoueurRandomSampleGenerator();
        Ville villeBack = getVilleRandomSampleGenerator();

        joueur.setVille(villeBack);
        assertThat(joueur.getVille()).isEqualTo(villeBack);

        joueur.ville(null);
        assertThat(joueur.getVille()).isNull();
    }
}
