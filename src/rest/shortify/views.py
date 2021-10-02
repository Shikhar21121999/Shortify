from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions

# Create your views here.

class SummaryGroupView(APIView):

    def get(self, request):
        data = request.GET.get('data', None)

        return Response({}, status=status.HTTP_200_OK)

