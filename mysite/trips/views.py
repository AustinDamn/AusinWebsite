#trips.views.py
from datetime import datetime
from django.shortcuts import render
#above one is for test
from django.http import HttpResponse

def hello_world(request):
    return render(request, 'hello_world.html', {'current_time': datetime.now()})
        
def austin(request):
    return render(request, 'austin.html')
    
def Personal_info(request):
    return render(request, 'Personal_info.html')
    
def generic(request):
    return HttpResponse('come on')
    #return render(request, 'generic.html')
