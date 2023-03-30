<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    #[Route('/', name: 'app_conference')]
    public function index(): Response
    {
        return $this->render('homePage/index.html.twig', [
            'controller_name' => 'HomeController',
        ]);
    }
}
