from rest_framework import serializers
from .models import WellBeingProvider

class FileUploadSerializer(serializers.Serializer):
    file = serializers.FileField()

class SaveFileSerializer(serializers.Serializer):
    
    class Meta:
        model = WellBeingProvider
        fields = "__all__"

class ProviderSerializer(serializers.ModelSerializer):

    class Meta:
        model = WellBeingProvider
        fields = '__all__'