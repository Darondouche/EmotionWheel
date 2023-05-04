<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\Persistence\ManagerRegistry;
use App\Entity\Need;

class NeedController extends AbstractController
{
    #[Route('/need', name: 'app_need', methods: 'GET')]
    public function getEmotions(ManagerRegistry $doctrine): Response
    {
        $needs = $doctrine
            ->getRepository(Need::class)
            ->findAll();
        
        $data = [];

        foreach ($needs as $need) {
            $data[] = [
                'id' => $need ->getId(),
                'content' => $need ->getContent(),
            ];
        }
        // Return the $data array as a JSON response
        return $this->json($data);
    }
}