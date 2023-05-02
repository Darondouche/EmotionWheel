<?php

namespace “AppEntity”;

use Doctrine\ORM\Mapping as ORM;

/**
 * Need
 *
 * @ORM\Table(name="need", indexes={@ORM\Index(name="IDX_E6F46C44BC2263C3", columns={"id_feeling"})})
 * @ORM\Entity
 */
class Need
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="bigint", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="need_id_seq", allocationSize=1, initialValue=1)
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
