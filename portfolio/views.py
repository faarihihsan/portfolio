from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.core.mail import send_mail
import socket

def landing_page(request):
    # return render(request, 'index.html')
    return render(request, 'satu.html')

def mail(request):
    
    socket.getaddrinfo('localhost', 8000)
    send_mail(
        'Subject here',
        'Here is the message.',
        'ihsan.sansan7@gmail.com',
        ['ihsan.sansan7@gmail.com'],
        fail_silently=True,
    )
    return redirect('/')