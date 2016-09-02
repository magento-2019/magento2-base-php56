![valid XHTML][checkmark]
[checkmark]: https://raw.githubusercontent.com/mozgbrasil/mozgbrasil.github.io/master/assets/images/logos/Red_star_32_32.png "MOZG"
[requirements]: http://mozgbrasil.github.io/requirements/
[getcomposer]: https://getcomposer.org/
[uninstall-mods]: http://devdocs.magento.com/guides/v2.1/install-gde/install/cli/install-cli-uninstall-mods.html

# Mozg\Base

## Sinopse

Módulo requerido para funcionamento dos demais módulos

## Motivação

Atender o mercado de módulos para Magento oferecendo um excelente suporte

## Característica técnica


## Instalação - Atualização - Desinstalação

Este módulo destina-se a ser instalado usando o [Composer][getcomposer]

Antes de executar os processos, [clique aqui][requirements] e leia os pré-requisitos e sugestões

--

### Para instalar o módulo execute o comando a seguir no terminal do seu servidor

	composer require mozgbrasil/magento2-base-php56 && php bin/magento setup:upgrade

Você pode verificar se o módulo está instalado, indo ao backend em:

	STORES -> Configuration -> ADVANCED/Advanced -> Disable Modules Output

--

### Para atualizar o módulo execute o comando a seguir no terminal do seu servidor

	composer update && php bin/magento setup:upgrade

--

### Para [desinstalar][uninstall-mods] o módulo execute o comando a seguir no terminal do seu servidor

	bin/magento module:uninstall --remove-data --backup-code --backup-media --backup-db Mozg_Base

~~composer remove mozgbrasil/magento2-base-php56 && composer clear-cache && composer update && php bin/magento setup:upgrade~~

## Contribuintes

Equipe Mozg

## License

[Comercial License] (LICENSE.txt)

## Badges

[![Join the chat at https://gitter.im/mozgbrasil](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/mozgbrasil/)
[![Latest Stable Version](https://poser.pugx.org/mozgbrasil/magento2-base-php56/v/stable)](https://packagist.org/packages/mozgbrasil/magento2-base-php56)
[![Total Downloads](https://poser.pugx.org/mozgbrasil/magento2-base-php56/downloads)](https://packagist.org/packages/mozgbrasil/magento2-base-php56)
[![Latest Unstable Version](https://poser.pugx.org/mozgbrasil/magento2-base-php56/v/unstable)](https://packagist.org/packages/mozgbrasil/magento2-base-php56)
[![License](https://poser.pugx.org/mozgbrasil/magento2-base-php56/license)](https://packagist.org/packages/mozgbrasil/magento2-base-php56)
[![Monthly Downloads](https://poser.pugx.org/mozgbrasil/magento2-base-php56/d/monthly)](https://packagist.org/packages/mozgbrasil/magento2-base-php56)
[![Daily Downloads](https://poser.pugx.org/mozgbrasil/magento2-base-php56/d/daily)](https://packagist.org/packages/mozgbrasil/magento2-base-php56)

:cat2:
