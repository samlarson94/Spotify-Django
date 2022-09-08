from django.shortcuts import render

# Create your views here.
# Render index template
def index(request, *args, **kwargs):
    return render(request, 'frontend/index.html')
