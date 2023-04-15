from django.contrib import admin
from .models import WellBeingProvider

class FileAdmin(admin.ModelAdmin):
    list_display = ["id", "cd_equi", "tema", "id_equip", "equipament", "tipo_equi", "dep_admin", "pre_nome", "nome", "sigla_equi", "conveniado", "nome_abrev",
    "nome_mapa", "cd_rua", "nome_rua", "nome_ruano", "num_pred", "compl_end", "indfiscal", "cd_bairro", "bairro", "quadr_equi", "cd_regional", "regional",
    "func_manha", "func_tarde", "func_noite", "func_24hr", "telefone", "ramal", "email", "site", "dt_inaugur", "desativado", "observacao","fonte"]

admin.site.register(WellBeingProvider, FileAdmin)
