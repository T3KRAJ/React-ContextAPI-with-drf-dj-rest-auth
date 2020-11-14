from django.db.models import fields
from djoser.serializers import UserCreateSerializer, UserSerializer
from .models import User
from rest_framework import serializers

class UserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer):
        model = User
        fields = {'id', 'email', 'username', 'first_name', 'last_name', 'phone'}