package fr.esgi.ville.service;

import fr.esgi.ville.domain.Ville;
import java.util.List;
import java.util.Optional;

/**
 * Service Interface for managing {@link fr.esgi.ville.domain.Ville}.
 */
public interface VilleService {
    /**
     * Save a ville.
     *
     * @param ville the entity to save.
     * @return the persisted entity.
     */
    Ville save(Ville ville);

    /**
     * Updates a ville.
     *
     * @param ville the entity to update.
     * @return the persisted entity.
     */
    Ville update(Ville ville);

    /**
     * Partially updates a ville.
     *
     * @param ville the entity to update partially.
     * @return the persisted entity.
     */
    Optional<Ville> partialUpdate(Ville ville);

    /**
     * Get all the villes.
     *
     * @return the list of entities.
     */
    List<Ville> findAll();

    /**
     * Get the "id" ville.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Optional<Ville> findOne(Long id);

    /**
     * Delete the "id" ville.
     *
     * @param id the id of the entity.
     */
    void delete(Long id);
}
