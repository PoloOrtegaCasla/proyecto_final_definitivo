from django.urls import path, include
from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from .views import TareaViews

router = routers.DefaultRouter()
router.register(r'tasks',TareaViews,'tasks')

urlpatterns = [
    path('tasks/',include(router.urls)),
    path('documentacion/',include_docs_urls(title="documentacion tasks"))
]
