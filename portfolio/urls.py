from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.landing_page),
    path('mail/', views.mail, name='mail')
]
