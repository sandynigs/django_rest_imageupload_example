from django.conf.urls import url, include
from django.views.generic.base import RedirectView #It only tells django whatever you are looking for is not on this url , go look somewhere else


urlpatterns = [
    url(r'^$', RedirectView.as_view(url = 'static/index.html', permanent = False), name = 'index'),#There id no permanent redirect
]