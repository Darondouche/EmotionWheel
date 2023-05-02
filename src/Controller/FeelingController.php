<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\Persistence\ManagerRegistry;
use App\Entity\Feeling;

class FeelingController extends AbstractController
{
    #[Route('/feeling', name: 'app_feeling', methods: 'GET')]
    public function getFeelings(ManagerRegistry $doctrine): Response
    {
        $feelings = $doctrine
            ->getRepository(Feeling::class)
            ->findAll();
        
        $data = [];

        foreach ($feelings as $feeling) {
            $data[] = [
                'id' => $feeling ->getId(),
                'category' => $feeling ->getCategory()
            ];
        }
        // Return the $data array as a JSON response
        return $this->json($data);
    }
}
