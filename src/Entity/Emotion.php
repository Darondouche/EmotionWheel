<?php

namespace “AppEntity”;

use Doctrine\ORM\Mapping as ORM;

/**
 * Emotion
 *
 * @ORM\Table(name="emotion", indexes={@ORM\Index(name="IDX_DEBC77BC2263C3", columns={"id_feeling"})})
 * @ORM\Entity
 */
class Emotion
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="bigint", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="emotion_id_seq", allocationSize=1, initialValue=1)
     */
    private $id;

    /**
     * @var string|null
     *
     * @ORM\Column(name="content", type="string", nullable=true)
     */
    private $content;

    /**
     * @var \Feeling
     *
     * @ORM\ManyToOne(targetEntity="Feeling")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="id_feeling", referencedColumnName="id")
     * })
     */
    private $idFeeling;


}
