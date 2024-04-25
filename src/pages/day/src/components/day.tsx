import { CreateLessonDrawerAsync } from "@features";
import { Button,Flex, Scrollable, Title } from "@shared/ui";
import { LessonsList } from "@widgets";
import { useState, useTransition } from "react";
import { useTranslation} from "react-i18next";
import { useParams } from "react-router-dom";

export const Day = () => {
  const params = useParams();
  const {t} = useTranslation('translation',{ keyPrefix: 'day'})
  const [isCreateDrawerOpen, setIsCreateDrawerOpen] = useState(false)
  const [, startTransition] = useTransition();
  const handleChangeDrawer = ()=> setIsCreateDrawerOpen(!isCreateDrawerOpen)

  return (
    <Flex vertical gap={10} flex={1} style={{paddingLeft:'30px'}}>
      <Title>{params.date}</Title>
      <Flex justify="start">
        <Button  onClick={()=>{startTransition(handleChangeDrawer)}} size="large">{t('addDopButton')}</Button>
      </Flex>
      <Scrollable height={70}>
        <LessonsList/>
      </Scrollable>
      {isCreateDrawerOpen && <CreateLessonDrawerAsync open={isCreateDrawerOpen} onClose={handleChangeDrawer}/>}
    </Flex>
      );
  };