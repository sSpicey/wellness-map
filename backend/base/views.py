from django.shortcuts import render
from rest_framework import generics
import io, json, csv, pandas as pd

from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import WellBeingProvider
from .serializers import *

class UploadFileView(generics.CreateAPIView):
    serializer_class = FileUploadSerializer
    
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        file = serializer.validated_data['file']
        reader = pd.read_csv(file)
        for _, row in reader.iterrows():
            new_file = WellBeingProvider(
                       id = row['gid'],
                       cd_equi= row["cd_equi"],
                       tema= row['tema'],
                       id_equip= row["id_equip"],
                       equipament= row["equipament"],
                       tipo_equi= row['tipo_equi'],
                       dep_admin= row['dep_admin'],
                       pre_nome= row['pre_nome'],
                       nome= row['nome'],
                       sigla_equi= row['sigla_equi'],
                       conveniado= row['conveniado'],
                       nome_abrev= row['nome_abrev'],
                       nome_mapa= row['nome_mapa'],
                       cd_rua= row['cd_rua'],
                       nome_rua= row['nome_rua'],
                       nome_ruano= row['nome_ruano'],
                       num_pred= row['num_pred'],
                       compl_end= row['compl_end'],
                       indfiscal= row['indfiscal'],
                       cd_bairro= row['cd_bairro'],
                       bairro= row['bairro'],
                       quadr_equi= row['quadr_equi'],
                       cd_regional= row['cd_regional'],
                       regional= row['cd_bairro'],
                       func_manha= row['func_manha'],
                       func_tarde= row['func_tarde'],
                       func_noite= row['func_noite'],
                       func_24hr= row['func_24hr'],
                       telefone= row['telefone'],
                       ramal= row['ramal'],
                       email= row['email'],
                       site= row['site'],
                       dt_inaugur= row['dt_inaugur'],
                       desativado= row['desativado'],
                       observacao= row['observacao'],
                       fonte= row['fonte']
                       )
            new_file.save()
        return Response({"status": "success"})

@api_view(['GET'])
def getProviders(request):
    query = request.query_params.get('keyword')
    if query == None:
        query = ''

    providers = WellBeingProvider.objects.all()

    serializer = ProviderSerializer(providers, many=True)
    
    return Response(serializer.data)