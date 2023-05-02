<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Feeling
 *
 * @ORM\Table(name="feeling")
 * @ORM\Entity
 */
class Feeling
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="bigint", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="feeling_id_seq", allocationSize=1, initialValue=1)
     */
    private $id;

    /**
     * @var string|null
     *
     * @ORM\Column(name="category", type="string", nullable=true)
     */
    private $category;


}
