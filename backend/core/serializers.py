from django.db.models import fields
from djoser.serializers import UserCreateSerializer, UserSerializer
from .models import User
from rest_framework import serializers

class UserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer):
        model = User
        fields = {'id', 'email', 'username', 'first_name', 'last_name', 'phone'}

    def validate_phone(self, value):
        ModelClass = self.Meta.model
        if ModelClass.objects.filter(phone=value).exists():
            raise serializers.ValidationError('User with provided phone number already exists')
        return value

    def validate_email_(self, value):
        ModelClass = self.Meta.model
        if ModelClass.objects.filter(email_=value).exists():
            raise serializers.ValidationError('User with provided email already exists')
        return value