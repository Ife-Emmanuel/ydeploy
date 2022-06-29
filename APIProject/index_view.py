from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(['GET'])
def index(request):
    data = {'data' : 'Here is the hompage for this application'}
    return Response(data= data)