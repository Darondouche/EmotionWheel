<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Entry
 *
 * @ORM\Table(name="entry", indexes={@ORM\Index(name="IDX_2B219D70DE431507", columns={"id_emotion"}), @ORM\Index(name="IDX_2B219D706DD47046", columns={"id_need"}), @ORM\Index(name="IDX_2B219D702E40133F", columns={"id_sensation"}), @ORM\Index(name="IDX_2B219D706B3CA4B", columns={"id_user"})})
 * @ORM\Entity
 */
class Entry
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="bigint", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="entry_id_seq", allocationSize=1, initialValue=1)
     */
    private $id;

    /**
     * @var \DateTime|null
     *
     * @ORM\Column(name="created_at", type="datetimetz", nullable=true, options={"default"="now()"})
     */
    private $createdAt = 'now()';

    /**
     * @var string|null
     *
     * @ORM\Column(name="comment", type="string", nullable=true)
     */
    private $comment;

    /**
     * @var \Emotion
     *
     * @ORM\ManyToOne(targetEntity="Emotion")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="id_emotion", referencedColumnName="id")
     * })
     */
    private $idEmotion;

    /**
     * @var \Need
     *
     * @ORM\ManyToOne(targetEntity="Need")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="id_need", referencedColumnName="id")
     * })
     */
    private $idNeed;

    /**
     * @var \Sensation
     *
     * @ORM\ManyToOne(targetEntity="Sensation")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="id_sensation", referencedColumnName="id")
     * })
     */
    private $idSensation;

    /**
     * @var \Users
     *
     * @ORM\ManyToOne(targetEntity="Users")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="id_user", referencedColumnName="id")
     * })
     */
    private $idUser;


}
