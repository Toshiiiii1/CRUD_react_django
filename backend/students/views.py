from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http.response import JsonResponse
from django.http.response import Http404
from .models import Student
from .serializers import StudentSerializer

class StudentView(APIView):
    # creating student
    def post(self, request):
        data = request.data
        serializer = StudentSerializer(data=data)
        if (serializer.is_valid()):
            serializer.save()
            return JsonResponse("Student Added Successfully", safe=False)
        return JsonResponse("Failed to Add Student", safe=False)
    
    # getting specific student
    def get_student(self, pk):
        try:
            student = Student.objects.get(studentId=pk)
            return student
        except Student.DoesNotExist:
            raise Http404
        
    # getting all students
    def get(self, request, pk=None):
        if (pk):
            data = self.get_student(pk)
            serializer = StudentSerializer(data)
        else:
            data = Student.objects.all()
            serializer = StudentSerializer(data, many=True)
        return Response(serializer.data)
    
    # updating student info
    def put(self, request, pk=None):
        student = Student.objects.get(studentId=pk)
        serializer = StudentSerializer(instance=student, data=request.data, partial=True)
        
        if (serializer.is_valid()):
            serializer.save()
            return JsonResponse("Student updated Successfully", safe=False)
        return JsonResponse("Failed To Update Student", safe=False)
    
    # deleting student
    def delete(self, request, pk):
        student = Student.objects.get(studentId=pk)
        student.delete()
        return JsonResponse("Student Deleted Successfully", safe=False)