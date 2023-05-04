<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Sensation
 *
 * @ORM\Table(name="sensation", indexes={@ORM\Index(name="IDX_AE75AF18BC2263C3", columns={"id_feeling"})})
 * @ORM\Entity
 */
class Sensation
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="bigint", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="sensation_id_seq", allocationSize=1, initialValue=1)
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

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getContent(): ?string
    {
        return $this->content;
    }
    public function getIdFeeling(): ?Feeling
    {
        return $this->idFeeling;
    }
    
}
