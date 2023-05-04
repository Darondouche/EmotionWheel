<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\Persistence\ManagerRegistry;
use App\Entity\Sensation;

class SensationController extends AbstractController
{
    #[Route('/sensation', name: 'app_sensation', methods: 'GET')]
    public function getEmotions(ManagerRegistry $doctrine): Response
    {
        $sensations = $doctrine
            ->getRepository(Sensation::class)
            ->findAll();
        
        $data = [];

        foreach ($sensations as $sensation) {
            $data[] = [
                'id' => $sensation ->getId(),
                'content' => $sensation ->getContent(),
                'id_feeling' => $sensation ->getIdFeeling(),
            ];
        }
        // Return the $data array as a JSON response
        return $this->json($data);
    }
}