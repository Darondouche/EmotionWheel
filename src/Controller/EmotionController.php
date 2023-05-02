<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\Persistence\ManagerRegistry;
use App\Entity\Emotion;

class EmotionController extends AbstractController
{
    #[Route('/emotion', name: 'app_emotion', methods: 'GET')]
    public function getEmotions(ManagerRegistry $doctrine): Response
    {
        $emotions = $doctrine
            ->getRepository(Emotion::class)
            ->findAll();
        
        $data = [];

        foreach ($emotions as $emotion) {
            $data[] = [
                'id' => $emotion ->getId(),
                'content' => $emotion ->getContent()
            ];
        }
        // Return the $data array as a JSON response
        return $this->json($data);
    }
}
